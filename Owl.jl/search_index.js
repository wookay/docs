var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#-1",
    "page": "Home",
    "title": "🦉",
    "category": "section",
    "text": "초보똥의 머싄러닁번역에 대한 피드백은 https://github.com/wookay/Owl.jl 이슈에 남겨 달라"
},

{
    "location": "Flux/#",
    "page": "Flux 홈",
    "title": "Flux 홈",
    "category": "page",
    "text": "🦉 https://github.com/FluxML/Flux.jl 자료를 번역하는 곳입니당"
},

{
    "location": "Flux/#Flux:-줄리아-머싄러닁-라이브러리-1",
    "page": "Flux 홈",
    "title": "Flux: 줄리아 머싄러닁 라이브러리",
    "category": "section",
    "text": "Flux는 머싄러닁을 위한 라이브러리이다. \"배터리-포함(batteries-included, 제품의 완전한 유용성을 위해 필요한 모든 부품을 함께 제공한다는 소프트웨어쪽 용어)\" 많은 유용한 도구를 제공한다. 줄리아 언어를 풀파워(full power)로 사용할 수 있다. 전체 스택을 줄리아 코드로 구현한다. GPU 커널도 가능하고, 개별 파트를 개인 취향에 맞게 조작할 수 있다."
},

{
    "location": "Flux/#설치하기-1",
    "page": "Flux 홈",
    "title": "설치하기",
    "category": "section",
    "text": "줄리아 0.6.0 이상, 아직 안깔았으면 설치하자.Pkg.add(\"Flux\")\n# 선택인데 추천\nPkg.update() # 패키지를 최신 버전으로 업뎃\nPkg.test(\"Flux\") # 설치 똑바로 된건가 확인하기기본적인 것 부터 시작하자. 모델 동물원(model zoo)은 여러가지 공통 모델을 다루는데 그걸로 시작해도 좋다."
},

{
    "location": "Flux/models/basics/#",
    "page": "기본적인 것",
    "title": "기본적인 것",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/basics/#모델-만들기-기초-1",
    "page": "기본적인 것",
    "title": "모델 만들기 기초",
    "category": "section",
    "text": ""
},

{
    "location": "Flux/models/basics/#기울기(Gradients,-경사)-구하기-1",
    "page": "기본적인 것",
    "title": "기울기(Gradients, 경사) 구하기",
    "category": "section",
    "text": "간단한 리니어 리그레션(linear regression, 직선 모양으로 그려지는 함수)을 생각해 보자. 이것은 입력 x에 대한 출력 배열 y를 예측한다. (줄리아 REPL에서 예제를 따라해보면 좋다)julia> W = rand(2, 5)\n2×5 Array{Float64,2}:\n 0.857747   0.291713  0.179873  0.938979  0.51022\n 0.0852085  0.977716  0.246164  0.460672  0.772312\n\njulia> b = rand(2)\n2-element Array{Float64,1}:\n 0.663369\n 0.132996\n\njulia> predict(x) = W*x .+ b\npredict (generic function with 1 method)\n\njulia> loss(x, y) = sum((predict(x) .- y).^2)\nloss (generic function with 1 method)\n\njulia> x, y = rand(5), rand(2) # 더미 데이터\n([0.496864, 0.947507, 0.874288, 0.251528, 0.192234], [0.901991, 0.0802404])\n\njulia> loss(x, y) # ~ 3\n3.1660692660286722예측을 더 잘하기 위해 W와 b의 기울기를 구하자. loss function(손실, 예측 실패 함수)과 gradient descent(경사 하강, 내리막 기울기)를 해보면서. 직접 손으로 기울기를 계산할 수도 있지만 Flux에서는 W와 b를 훈련시키는 파라미터(parameters)로 둘 수 있다.julia> using Flux.Tracker\n\njulia> W = param(W)\nTracked 2×5 Array{Float64,2}:\n 0.857747   0.291713  0.179873  0.938979  0.51022\n 0.0852085  0.977716  0.246164  0.460672  0.772312\n\njulia> b = param(b)\nTracked 2-element Array{Float64,1}:\n 0.663369\n 0.132996\n\njulia> l = loss(x, y)\n3.1660692660286722 (tracked)\n\njulia> back!(l)\nloss(x, y)는 방금 전과 같은 수(3.1660692660286722)를 리턴, 그런데 이제부터는 기울어지는 모양을 관찰 기록하여 값을 추적(tracked)  한다. back!을 호출하면 W와 b의 기울기를 계산한다. 기울기가 뭔지 알아냈으니 W를 고쳐가면서 모델을 훈련하자.julia> W.grad\n2×5 Array{Float64,2}:\n 0.949491  1.81066  1.67074  0.480662  0.367352\n 1.49163   2.84449  2.62468  0.755107  0.577101\n\njulia> # 파라미터 업뎃\n       W.data .-= 0.1(W.grad)\n2×5 Array{Float64,2}:\n  0.762798   0.110647   0.0127989  0.890913  0.473484\n -0.0639541  0.693267  -0.0163046  0.385161  0.714602\n\njulia> loss(x, y) # ~ 2.5\n1.1327711929294395 (tracked)예측 실패(loss)가 조금 줄어들었다. x 예측이 목표 대상(target) y에 좀 더 가까워졌다는 것을 의미한다. 데이터가 있으면 모델 훈련하기도 시도할 수 있다.복잡한 딥러닝이 Flux에서는 이와 같은 예제처럼 단순해진다. 물론 모델의 파라미터 갯수가 백만개가 넘어가고 복잡한 제어 흐름을 갖게 되면 다른 모양을 갖겠지. 그리고 이러한 복잡성을 다루는 것에는 뭐가 있는지 한번 살펴보자."
},

{
    "location": "Flux/models/basics/#레이어-만들기-1",
    "page": "기본적인 것",
    "title": "레이어 만들기",
    "category": "section",
    "text": "이제부터는 리니어 리그레션 보다 복잡한 모델을 만들어 보자. 예를 들어, 두 개의 리니어 레이어 사이에 시그모이드 (σ) 처럼 비선형(nonlinearity, 커브처럼 직선이 아닌 거)를 갖는 넘이 있을때, 위의 스타일은 아래와 같이 쓸 수 있다:julia> using Flux\n\njulia> W1 = param(rand(3, 5))\nTracked 3×5 Array{Float64,2}:\n 0.540422  0.680087  0.743124  0.0216563  0.377793\n 0.416939  0.51823   0.464998  0.419852   0.446143\n 0.260294  0.392582  0.46784   0.549495   0.373124\n\njulia> b1 = param(rand(3))\nTracked 3-element Array{Float64,1}:\n 0.213799\n 0.373862\n 0.243417\n\njulia> layer1(x) = W1 * x .+ b1\nlayer1 (generic function with 1 method)\n\njulia> W2 = param(rand(2, 3))\nTracked 2×3 Array{Float64,2}:\n 0.789744  0.389376  0.172613\n 0.472963  0.21518   0.220236\n\njulia> b2 = param(rand(2))\nTracked 2-element Array{Float64,1}:\n 0.121207\n 0.502486\n\njulia> layer2(x) = W2 * x .+ b2\nlayer2 (generic function with 1 method)\n\njulia> model(x) = layer2(σ.(layer1(x)))\nmodel (generic function with 1 method)\n\njulia> model(rand(5)) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 1.06727\n 1.13835작동은 하는데 중복 작업이 많아 보기에 좋지 않다 - 특히 레이어를 더 추가한다면. 리니어 레이어를 돌려주는 함수를 하나 만들어 이것들을 정리하자.julia> function linear(in, out)\n         W = param(randn(out, in))\n         b = param(randn(out))\n         x -> W * x .+ b\n       end\nlinear (generic function with 1 method)\n\njulia> linear1 = linear(5, 3) # linear1.W 할 수 있닥 (익명함수 리턴)\n(::#3) (generic function with 1 method)\n\njulia> linear1.W\nTracked 3×5 Array{Float64,2}:\n -1.72011   -1.07297   0.396755  -0.117604   0.25952\n -0.16694    0.99327  -0.589717  -1.87123    0.141679\n -0.972281  -1.84836   2.55071   -0.136674  -0.147826\n\njulia> linear2 = linear(3, 2)\n(::#3) (generic function with 1 method)\n\njulia> model(x) = linear2(σ.(linear1(x)))\nmodel (generic function with 1 method)\n\njulia> model(x) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 2.75582\n 0.416809다른 방법으로는 struct로 타입을 만들어서 어파인(affine) 레이어를 명시적으로 표현하는 것이 있다.julia> struct Affine\n         W\n         b\n       end\n\njulia> Affine(in::Integer, out::Integer) =\n         Affine(param(randn(out, in)), param(randn(out)))\nAffine\n\njulia> # 오버로드 하면 객체를 함수처럼 호출할 수 있다\n       (m::Affine)(x) = m.W * x .+ m.b\n\njulia> a = Affine(10, 5)\nAffine(param([0.0252182 -1.99122 … -0.191235 0.294728; 1.13559 1.50226 … -2.43917 0.56976; … ; -0.735177 0.202646 … -0.301945 -0.183598; 1.05967 0.986786 … -1.57835 -0.0893871]), param([-0.39419, -1.26818, 0.757665, 0.941398, -0.783242]))\n\njulia> a(rand(10)) # => 5-엘러먼트 벡터\nTracked 5-element Array{Float64,1}:\n -0.945544\n -0.575674\n  2.93741\n  0.111253\n -0.843172축하합니다! Flux에서 나오는 Dense 레이어 만들기 성공! Flux는 많은 재밌는 레이어들이 있는데, 그것들을 직접 만드는 것 또한 정말 쉽다.(Dense와 다른 한가지 - 편의를 위해 활성(activation) 함수를 뒤에 추가할 수도 있다. Dense(10, 5, σ) 요런식으로.)"
},

{
    "location": "Flux/models/basics/#이쁘게-쌓아보자-1",
    "page": "기본적인 것",
    "title": "이쁘게 쌓아보자",
    "category": "section",
    "text": "다음과 같은 모델을 만드는 것은 흔하다: (layer1 이름이 겹치니 REPL을 새로 띄우자)julia> using Flux\n\njulia> layer1 = Dense(10, 5, σ)\nDense(10, 5, NNlib.σ)\n\njulia> # ...\n       model(x) = layer3(layer2(layer1(x)))\nmodel (generic function with 1 method)기다랗게 연결(chains) 할라믄, 다음과 같이 레이어의 리스트를 만드는게 좀 더 직관적이다:julia> layers = [Dense(10, 5, σ), Dense(5, 2), softmax]\n3-element Array{Any,1}:\n Dense(10, 5, NNlib.σ)\n Dense(5, 2)\n NNlib.softmax\n\njulia> model(x) = foldl((x, m) -> m(x), x, layers)\nmodel (generic function with 1 method)\n\njulia> model(rand(10)) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 0.593021\n 0.406979편리하게 쓰라고 이것 역시 Flux에서 제공한다:julia> model2 = Chain(\n         Dense(10, 5, σ),\n         Dense(5, 2),\n         softmax)\nChain(Dense(10, 5, NNlib.σ), Dense(5, 2), NNlib.softmax)\n\njulia> model2(rand(10)) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 0.172085\n 0.827915고오급 딥러닝 라이브러리 같아 보인다; 어느만큼 간단하게 추상화 하는지 보았을 것이다. 줄리아 코드의 강력함을 놓치지 않았다.이런 접근법의 좋은 점은 \"모델\"이 함수라는 것이다 (훈련가능한 파라미터와 함께), 함수 합성(∘) 또한 가능하다.julia> m = Dense(5, 2) ∘ Dense(10, 5, σ)\n(::#55) (generic function with 1 method)\n\njulia> m(rand(10))\nTracked 2-element Array{Float64,1}:\n -1.28749\n -0.202492마찬가지로, Chain은 줄리아 함수와 이쁘게 동작한다.julia> m = Chain(x -> x^2, x -> x+1)\nChain(#3, #4)\n\njulia> m(5) # => 26\n26"
},

{
    "location": "Flux/models/basics/#레이어-도우미들-1",
    "page": "기본적인 것",
    "title": "레이어 도우미들",
    "category": "section",
    "text": "Flux는 사용자의 커스텀 레이어를 도와주는 함수를 제공한다. 다음과 같이 호출하면julia> Flux.treelike(Affine)\nadapt (generic function with 1 method)Affine 레이어에 부가적인 유용한 기능이 추가된다, 파라미터 모으기(collecting)나 GPU에서 처리하기 같은 작업을 할 수 있다."
},

{
    "location": "Flux/models/recurrence/#",
    "page": "순환(Recurrence)",
    "title": "순환(Recurrence)",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/recurrence/#순환-모델(Recurrent-Models)-1",
    "page": "순환(Recurrence)",
    "title": "순환 모델(Recurrent Models)",
    "category": "section",
    "text": ""
},

{
    "location": "Flux/models/recurrence/#기억-세포(Recurrent-Cells,-순환-셀,-뇌를-모방한-거)-1",
    "page": "순환(Recurrence)",
    "title": "기억 세포(Recurrent Cells, 순환 셀, 뇌를 모방한 거)",
    "category": "section",
    "text": "단순한 피드포워드(feedforward, 사이클(cycle)이나 루프(loop)가 없는 네트워크) 경우, 모델 m은 여러 개의 입력 xᵢ에 대한 yᵢ를 예측하는 간단한 함수다. (예를 들어, x를 MNIST 숫자라 치면 y는 그것을 분류한 숫자.) 예측은 서로 완전히 독립적이며 x가 같으면 y도 언제나 동일하다.y₁ = f(x₁)\ny₂ = f(x₂)\ny₃ = f(x₃)\n# ...순환 네트워크는 히든 상태(hidden state, 숨겨논 상태)가 존재하며 모델을 돌릴 때 매번 그 상태를 다음으로 넘긴다. 그래서 이 모델은 그때마다 이전 h를 입력으로 받고, 새로운 h를 출력으로 내 놓는다.h = # ... 초기 상태 ...\nh, y₁ = f(h, x₁)\nh, y₂ = f(h, x₂)\nh, y₃ = f(h, x₃)\n# ...h에 저장한 정보는 다음번 예측을 위해 유지하고, 그래서 마치 함수의 메모리 같은 역할을 하게 한다. 이것은 x에 대한 예측이 이전까지 모델에 주입한 모든 입력으로부터 영향을 받는 것을 의미한다.(요거는 중요한 거니까 예를 들어, x를 문장에서의 한 단어라 보자; 만약에 \"bank\"라는 영어 단어가 주어지면 모델은 이전 입력이 \"강 river\" 이면 강둑으로, \"투자 investment\"면 은행으로 해석해야 한다.)Flux의 RNN 지원은 수학적 관점을 지니고 있다. 가장 기본이 되는 RNN은 표준 \"Dense\" 레이어를 따르고, 그 출력은 히든 상태이다.julia> using Flux\n\njulia> Wxh = randn(5, 10)\n5×10 Array{Float64,2}:\n -0.197167   0.0931036  -1.13283   …   0.426711   1.5678      0.488363\n -1.19948   -1.05618     1.057        -1.85708    2.05188    -0.732148\n -0.848823   0.147774    1.66139      -0.777346  -0.0650354   0.36015\n -0.380701   0.737349    0.426964      0.694122  -1.46597    -1.00572\n -0.789044  -0.374745   -0.996698      0.505453  -0.117276    1.35148\n\njulia> Whh = randn(5, 5)\n5×5 Array{Float64,2}:\n -1.12946    -0.523065   0.0547692  -0.305124  -0.105809\n -0.195351    0.588007   0.616959    0.779213  -0.145329\n -0.265139   -0.535485  -0.300887    2.13263   -1.53089\n -0.0537235  -1.47912   -0.883858    0.993426  -0.354738\n  0.486817    0.170843   0.0440353   0.177502   0.730423\n\njulia> b   = randn(5)\n5-element Array{Float64,1}:\n  0.982592\n -0.724775\n  0.118081\n  0.140369\n -1.07578\n\njulia> function rnn(h, x)\n         h = tanh.(Wxh * x .+ Whh * h .+ b)\n         return h, h\n       end\nrnn (generic function with 1 method)\n\njulia> x = rand(10) # 더미 데이터\n10-element Array{Float64,1}:\n 0.312436\n 0.384043\n 0.972045\n 0.194086\n 0.496317\n 0.654925\n 0.0311892\n 0.494105\n 0.338846\n 0.204689\n\njulia> h = rand(5)  # 초기 히든 상태\n5-element Array{Float64,1}:\n 0.861124\n 0.994686\n 0.560054\n 0.371721\n 0.159454\n\njulia> h, y = rnn(h, x)\n([-0.963817, -0.198195, 0.903936, -0.686608, -0.839093], [-0.963817, -0.198195, 0.903936, -0.686608, -0.839093])마지막 rnn을 좀 더 돌려보면, 출력 y는 입력 x가 같은데도 조금씩 바뀌는 것을 알 수 있다.julia> h, y = rnn(h, x)\n([0.812906, -0.767065, 0.945139, 0.0198447, -0.996763], [0.812906, -0.767065, 0.945139, 0.0198447, -0.996763])\n\njulia> h, y = rnn(h, x)\n([-0.647084, -0.799032, 0.997557, 0.902798, -0.984697], [-0.647084, -0.799032, 0.997557, 0.902798, -0.984697])앞서 언급한 rnn 함수는 명시적으로 상태를 관리하는 기억 세포(cells) 이다. 다양한 기억 세포가 존재하며 레이어 참조에 관련 내용이 있다. 위의 예제는 다음과 같이 바꿀 수 있다:julia> using Flux\n\njulia> rnn2 = Flux.RNNCell(10, 5)\nRNNCell(10, 5, tanh)\n\njulia> x = rand(10) # 더미 데이터\n10-element Array{Float64,1}:\n 0.142406\n 0.944597\n 0.973233\n 0.434782\n 0.715639\n 0.763562\n 0.280661\n 0.293604\n 0.496457\n 0.173372\n\njulia> h = rand(5)  # 초기 히든 상태\n5-element Array{Float64,1}:\n 0.602545\n 0.998396\n 0.558707\n 0.637564\n 0.0313308\n\njulia> h, y = rnn2(h, x)\n(param([-0.160217, -0.741263, 0.048164, 0.963063, 0.0301785]), param([-0.160217, -0.741263, 0.048164, 0.963063, 0.0301785]))"
},

{
    "location": "Flux/models/recurrence/#상태를-갖는-모델-1",
    "page": "순환(Recurrence)",
    "title": "상태를 갖는 모델",
    "category": "section",
    "text": "대부분의 경우, 히든 상태를 직접 관리하는 거는 귀찮으니까 모델이 상태를 갖게끔 처리할 수 있다. Flux는 Recur 래퍼를 제공한다.julia> x = rand(10)\n10-element Array{Float64,1}:\n 0.165593\n 0.502313\n 0.120926\n 0.505827\n 0.917068\n 0.557163\n 0.688472\n 0.791826\n 0.0838632\n 0.709302\n\njulia> h = rand(5)\n5-element Array{Float64,1}:\n 0.40008\n 0.48858\n 0.551568\n 0.0688404\n 0.0583865\n\njulia> m = Flux.Recur(rnn, h)\nRecur(rnn)\n\njulia> y = m(x)\n5-element Array{Float64,1}:\n  0.963414\n -0.999974\n  0.739107\n  0.976241\n  0.986023Recur 래퍼는 m.state 필드에 상태를 저장한다.RNN(10, 5) 생성자를 사용하면 - RNNCell과 대응하는 - 다음과 같이 이거는 단순히 래퍼 셀이다.julia> RNN(10, 5)\nRecur(RNNCell(10, 5, tanh))"
},

{
    "location": "Flux/models/recurrence/#시퀀스(Sequences,-연속되는-값)-1",
    "page": "순환(Recurrence)",
    "title": "시퀀스(Sequences, 연속되는 값)",
    "category": "section",
    "text": "종종 개별적인 x 보다는 연속되는 입력을 다루길 원한다.julia> seq = [rand(10) for i = 1:10]\n10-element Array{Array{Float64,1},1}:\n [0.443911, 0.955247, 0.980153, 0.313181, 0.0426581, 0.354755, 0.113961, 0.222873, 0.865114, 0.14094]\n [0.50466, 0.0204917, 0.890547, 0.574102, 0.301098, 0.944295, 0.95414, 0.36809, 0.341546, 0.474998]\n [0.474114, 0.152628, 0.364967, 0.601978, 0.212361, 0.66016, 0.12101, 0.944988, 0.417781, 0.715282]\n [0.0776375, 0.843099, 0.000618674, 0.352273, 0.977611, 0.801756, 0.550702, 0.311638, 0.285711, 0.0856441]\n [0.603498, 0.863035, 0.89494, 0.506224, 0.840984, 0.13453, 0.43549, 0.216554, 0.361081, 0.0965758]\n [0.236062, 0.407028, 0.357854, 0.875694, 0.0468227, 0.786622, 0.616748, 0.791976, 0.800668, 0.147169]\n [0.739452, 0.38329, 0.961215, 0.113691, 0.381309, 0.57526, 0.0170709, 0.403656, 0.445509, 0.051497]\n [0.956629, 0.624735, 0.14811, 0.202354, 0.484018, 0.250409, 0.0352729, 0.809209, 0.831828, 0.826355]\n [0.388553, 0.42596, 0.736068, 0.454156, 0.626974, 0.641246, 0.444018, 0.768584, 0.118879, 0.416568]\n [0.307721, 0.176393, 0.371934, 0.714272, 0.886859, 0.333667, 0.721609, 0.975586, 0.59609, 0.771424]Recur로 모델을 시퀀스의 각 항목마다 쉽게 적용할 수 있다:julia> m.(seq) # 5-엘러먼트 벡터의 리스트를 돌려준다\n10-element Array{Array{Float64,1},1}:\n [0.958516, -0.996974, 0.640934, -0.440203, 0.991754]\n [0.998417, -0.998238, 0.988128, 0.924522, 0.999099]\n [0.943455, -0.999939, 0.94332, 0.638572, 0.999795]\n [0.997841, -0.999912, 0.414106, 0.705974, 0.999871]\n [0.9896, -0.96634, 0.903348, 0.805409, 0.949429]\n [0.990047, -0.999849, 0.991448, 0.950895, 0.999938]\n [0.980617, -0.988072, 0.978565, -0.785643, 0.985682]\n [0.98617, -0.99938, -0.791134, 0.603178, 0.0937938]\n [0.946547, -0.893022, 0.914559, 0.999905, 0.984556]\n [0.989439, -0.999979, 0.964896, 0.978421, 0.999834]더 커다란 모델에 순환 레이어(recurrent layers)를 연쇄적(chain)으로 연결 할 수 있다.julia> m = Chain(LSTM(10, 15), Dense(15, 5))\nChain(Recur(LSTMCell(10, 60)), Dense(15, 5))\n\njulia> m.(seq)\n10-element Array{TrackedArray{…,Array{Float64,1}},1}:\n param([0.0779735, 0.0534096, -0.0245852, -0.0699291, -0.00650743])\n param([0.203825, -0.0307184, -0.0940759, -0.100437, 0.0523315])\n param([0.21071, -0.19635, -0.106985, -0.185204, 0.132647])\n param([0.314643, -0.205525, -0.00144219, -0.165195, 0.197256])\n param([0.351024, -0.116196, 0.00489051, -0.255343, 0.209503])\n param([0.370406, -0.125797, -0.0506301, -0.253045, 0.179001])\n param([0.349787, -0.091392, -0.0699977, -0.249944, 0.197391])\n param([0.370064, -0.21158, -0.00144108, -0.337597, 0.24153])\n param([0.396285, -0.240793, -0.0263459, -0.358695, 0.260678])\n param([0.464372, -0.316526, -0.0295575, -0.352548, 0.251627])"
},

{
    "location": "Flux/models/recurrence/#기울기-계산-기록-잘라내기(Truncating-Gradients)-1",
    "page": "순환(Recurrence)",
    "title": "기울기 계산 기록 잘라내기(Truncating Gradients)",
    "category": "section",
    "text": "기본적으로, 순환 레이어의 기울기를 계산하는 것은 전체 기록(history)을 내포한다. 예를 들어 100개의 입력을 가진 모델을 실행할 때, back!을 하면 100개에 대한 기울기를 계산한다. 그러고 다른 10개의 입력을 더 계산한다면 110개의 기울기를 계산해야 한다 - 이거는 누적되므로 빠르게 연산 비용이 증가한다.이거를 막는 방법은 기울기 계산 기록을 잘라내어(truncate) 지워주는 것이다.julia> Flux.truncate!(m)\ntruncate!을 호출하면 깔끔이 청소해 준다. 그래서 더 많은 입력의 모델을 실행해도 비싼 기울기 연산 없이 해낼 수 있다.truncate!는 여러 개의 커다란 시퀀스 덩어리를 다룰 때 유용하지만, 서로 독립적인 시퀀스들을 다루고 싶을 때도 있다. 그 경우 히든 상태는 원래 값으로 완전히 초기화 되어 누적된 정보를 버린다. 그렇게 하고 싶으면 reset!을 해 주자.julia> Flux.reset!(m)\n"
},

{
    "location": "Flux/models/regularisation/#",
    "page": "정규화(Regularisation)",
    "title": "정규화(Regularisation)",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/regularisation/#정규화(Regularisation)-1",
    "page": "정규화(Regularisation)",
    "title": "정규화(Regularisation)",
    "category": "section",
    "text": "이번에는 모델 파라미터를 정규화 해 보자. vecnorm과 같은 정규화를 해주는 적절한 함수를 각 모델 파라미터에 적용하여 그 결과를 모든 loss에 더하도록 하자.예를 들어, 다음과 같은 간단한 regression을 보자.julia> using Flux\n\njulia> m = Dense(10, 5)\nDense(10, 5)\n\njulia> loss(x, y) = Flux.crossentropy(softmax(m(x)), y)\nloss (generic function with 1 method)m.W와 m.b 파라미터에 L2 norm을 취하여 정규화 해보자.julia> penalty() = vecnorm(m.W) + vecnorm(m.b)\npenalty (generic function with 1 method)\n\njulia> loss(x, y) = Flux.crossentropy(softmax(m(x)), y) + penalty()\nloss (generic function with 1 method)레이어를 이용하는 경우, Flux는 params 함수를 제공하여 모든 파라미터를 한번에 가져올 수 있다. sum(vecnorm, params)를 사용하여 전체를 쉽게 적용할 수 있다.julia> params(m)\n2-element Array{Any,1}:\n param([-0.61839 -0.556047 … -0.460808 -0.107646; 0.346293 -0.375076 … -0.608704 -0.181025; … ; -0.2226 -0.0992159 … 0.0707984 -0.429173; -0.331058 -0.291995 … 0.383368 0.156716])\n param([0.0, 0.0, 0.0, 0.0, 0.0])\n\njulia> sum(vecnorm, params(m))\n2.4130860599427706 (tracked)좀 더 큰 규모의 예로, 멀티-레이어 퍼셉트론(perceptron)은 다음과 같다.julia> m = Chain(\n         Dense(28^2, 128, relu),\n         Dense(128, 32, relu),\n         Dense(32, 10), softmax)\nChain(Dense(784, 128, NNlib.relu), Dense(128, 32, NNlib.relu), Dense(32, 10), NNlib.softmax)\n\njulia> loss(x, y) = Flux.crossentropy(m(x), y) + sum(vecnorm, params(m))\nloss (generic function with 1 method)\n\njulia> loss(rand(28^2), rand(10))\n39.128892409412174 (tracked)"
},

{
    "location": "Flux/models/layers/#",
    "page": "모델 참조(Model Reference)",
    "title": "모델 참조(Model Reference)",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/layers/#기본-레이어-1",
    "page": "모델 참조(Model Reference)",
    "title": "기본 레이어",
    "category": "section",
    "text": "거의 모든 신경망(neural networks)의 토대를 다음의 핵심 레이어로 구성한다.Chain\nDense\nConv2D"
},

{
    "location": "Flux/models/layers/#순환-레이어(Recurrent-Layers)-1",
    "page": "모델 참조(Model Reference)",
    "title": "순환 레이어(Recurrent Layers)",
    "category": "section",
    "text": "위의 핵심 레이어와 함께, 시퀀스 데이터(다른 종류의 구조화된 데이터)를 처리할 때 사용할 수 있다.RNN\nLSTM\nFlux.Recur"
},

{
    "location": "Flux/models/layers/#활성-함수(Activation-Functions)-1",
    "page": "모델 참조(Model Reference)",
    "title": "활성 함수(Activation Functions)",
    "category": "section",
    "text": "모델의 레이어 중간에 비선형성(Non-linearities)을 갖을 때 사용한다. 함수의 대부분은 NNlib에 정의되어 있고 Flux에서 기본적으로 사용할 수 있다.특별한 언급이 없으면 활성 함수는 보통 스칼라(scalars) 값을 처리한다. 배열에 적용하려면 σ.(xs), relu.(xs) 처럼 .으로 브로드캐스팅 해 주자.σ\nrelu\nleakyrelu\nelu\nswish"
},

{
    "location": "Flux/models/layers/#정상화(Normalisation)-and-정규화(Regularisation)-1",
    "page": "모델 참조(Model Reference)",
    "title": "정상화(Normalisation) & 정규화(Regularisation)",
    "category": "section",
    "text": "이 레이어들은 네트워크의 구조에는 영향을 주지 않으면서 훈련 시간(training times)의 개선 그리고 오버피팅(overfitting, 과적합)을 줄여 준다.Flux.testmode!\nBatchNorm\nDropout\nLayerNorm"
},

{
    "location": "Flux/training/optimisers/#",
    "page": "최적화",
    "title": "최적화",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/training/optimisers/#최적화-함수(Optimisers)-1",
    "page": "최적화",
    "title": "최적화 함수(Optimisers)",
    "category": "section",
    "text": "간단한 리니어 리그레션에서 우리는 더미 데이터를 만든 후, 손실(loss)을 계산하고 역전파(backpropagate) 하여 파라미터 W와 b의 기울기를 계산하였다.julia> using Flux\n\njulia> W = param(rand(2, 5))\nTracked 2×5 Array{Float64,2}:\n 0.215021  0.22422   0.352664  0.11115   0.040711\n 0.180933  0.769257  0.361652  0.783197  0.545495\n\njulia> b = param(rand(2))\nTracked 2-element Array{Float64,1}:\n 0.205216\n 0.150938\n\njulia> predict(x) = W*x .+ b\npredict (generic function with 1 method)\n\njulia> loss(x, y) = sum((predict(x) .- y).^2)\nloss (generic function with 1 method)\n\njulia> x, y = rand(5), rand(2) # 더미 데이터\n([0.153473, 0.927019, 0.40597, 0.783872, 0.392236], [0.261727, 0.00917161])\n\njulia> l = loss(x, y) # ~ 3\n3.6352060699201565 (tracked)\n\njulia> Flux.back!(l)\n기울기를 사용하여 파라미터를 업데이트 하고자 한다. 손실을 줄이려고 말이다. 여기서 한가지 방법은:function update()\n  η = 0.1 # 학습하는 속도(Learning Rate)\n  for p in (W, b)\n    p.data .-= η .* p.grad # 업데이트 적용\n    p.grad .= 0            # 기울기 0으로 clear\n  end\nendupdate를 호출하면 파라미터 W와 b는 바뀌고 손실(loss)은 내려간다.두가지는 짚고 넘어가자: 모델에서 훈련할 파라미터의 목록 (여기서는 [W, b]), 그리고 업데이트 진행 속도. 여기서의 업데이트는 간단한 gradient descent(경사 하강, x .-= η .* Δ) 였지만, 모멘텀(momentum)을 추가하는 것처럼 보다 어려운 것도 해보고 싶을 것이다.여기서 변수를 얻는 것은 아무것도 아니지만, 레이어를 복잡하게 쌓는다면 골치 좀 아플 것이다.julia> m = Chain(\n         Dense(10, 5, σ),\n         Dense(5, 2), softmax)\nChain(Dense(10, 5, NNlib.σ), Dense(5, 2), NNlib.softmax)[m[1].W, m[1].b, ...] 이렇게 작성하는 것 대신, Flux에서 제공하는 params(m) 함수를 이용해 모델의 모든 파라미터의 목록을 구할 것이다.julia> opt = SGD([W, b], 0.1) # Gradient descent(경사 하강)을 learning rate(학습 속도) 0.1 으로 한다\n(::#71) (generic function with 1 method)\n\njulia> opt() # `W`와 `b`를 변경하며 업데이트를 수행한다\n최적화 함수는 파라미터 목록을 받아 위의 update와 같은 함수를 돌려준다. opt나 update를 훈련 루프(training loop)에 넘겨줄 수 있는데, 매번 데이터의 미니-배치(mini-batch)를 한 후에 최적화를 수행할 것이다."
},

{
    "location": "Flux/training/optimisers/#최적화-함수-참고-1",
    "page": "최적화",
    "title": "최적화 함수 참고",
    "category": "section",
    "text": "모든 최적화 함수는 넘겨받은 파라미터를 업데이트 하는 함수를 돌려준다.SGD\nMomentum\nNesterov\nADAM"
},

{
    "location": "Flux/training/training/#",
    "page": "훈련시키기",
    "title": "훈련시키기",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/training/training/#훈련시키키(Training)-1",
    "page": "훈련시키기",
    "title": "훈련시키키(Training)",
    "category": "section",
    "text": "모델을 훈련시키려면 세가지가 필요하다:목표 함수(objective function), 주어진 데이터를 얼만큼 잘 평가할 것인가.\n데이터 포인트의 묶음(A collection of data points)을 목표 함수에 넘겨줄 것이다.\n최적화 함수로 모델 파라미터를 적절하게 업데이트 할 것이다.그리하여 Flux.train!는 다음과 같이 호출한다:Flux.train!(objective, data, opt)모델 동물원(model zoo)에 여러가지 예제가 있다."
},

{
    "location": "Flux/training/training/#손실-함수(Loss-Functions)-1",
    "page": "훈련시키기",
    "title": "손실 함수(Loss Functions)",
    "category": "section",
    "text": "목표 함수는 반드시 모델과 대상(target)의 차이를 나타내는 숫자를 돌려주어야 한다 - 모델의 loss. 기초에서 정의한 loss 함수가 목표(an objective)로서 작동할 것이다. 모델의 관점에서 목표를 정의할 수도 있다:julia> using Flux\n\njulia> m = Chain(\n         Dense(784, 32, σ),\n         Dense(32, 10), softmax)\nChain(Dense(784, 32, NNlib.σ), Dense(32, 10), NNlib.softmax)\n\njulia> loss(x, y) = Flux.mse(m(x), y)\nloss (generic function with 1 method)\n\n# 나중에\njulia> Flux.train!(loss, data, opt)목표는 항상 m(x)의 예측과 대상 y의 거리를 측정하는 비용 함수(cost function)의 관점에서 정의된다. Flux는 mean squared error를 구하는 mse나, cross entropy loss를 구하는 crossentropy 같은 비용 함수를 내장하고 있다. 원한다면 직접 계산해 볼 수도 있다."
},

{
    "location": "Flux/training/training/#데이터세트(Datasets)-1",
    "page": "훈련시키기",
    "title": "데이터세트(Datasets)",
    "category": "section",
    "text": "data 인자는 훈련할 데이터(보통 입력 x와 target 출력 y)의 묶음을 제공한다. 예를 들어, 딱 하나 있는 더미 데이터 세트는 다음과 같다:x = rand(784)\ny = rand(10)\ndata = [(x, y)]Flux.train!은 loss(x, y)을 호출하고, 기울기를 계산하며, 가중치(weights)를 업데이트하고 다음 데이터 포인트로 이동한다. 같은 데이터를 세 번 훈련시킬 수 있다:data = [(x, y), (x, y), (x, y)]\n# 또는 아래와 같이\ndata = Iterators.repeated((x, y), 3)x와 y는 별도로 읽어들어는 것이 보통이다. 이럴 경우에 zip을 쓸 수 있다:xs = [rand(784), rand(784), rand(784)]\nys = [rand( 10), rand( 10), rand( 10)]\ndata = zip(xs, ys)기본적으로 train!은 데이터를 오직 한번만 순회한다 (한 세대, a single \"epoch\"). 여러 세대를 돌리는 @epochs 매크로를 제공하고 있으니 REPL에서 다음과 같이 해 보자.julia> using Flux: @epochs\n\njulia> @epochs 2 println(\"hello\")\nINFO: Epoch 1\nhello\nINFO: Epoch 2\nhello\n\njulia> @epochs 2 Flux.train!(...)\n# 두 세대에 걸쳐 훈련한다"
},

{
    "location": "Flux/training/training/#컬백(Callbacks)-1",
    "page": "훈련시키기",
    "title": "컬백(Callbacks)",
    "category": "section",
    "text": "train!은 cb 인자를 추가적으로 받는데, 컬백 함수를 줘서 훈련 과정을 지켜볼 수 있다. 예를 들면:train!(objective, data, opt, cb = () -> println(\"training\"))컬백은 훈련 데이터의 배치(batch) 마다 호출된다. 좀더 적게 호출하려면 Flux.throttle(f, timeout)를 주어 f가 매 timeout 초 이상 호출되는 것을 막는다.컬백을 사용하는 전형적인 방식은 다음과 같다:test_x, test_y = # ... 테스트 데이터의 단일 배치(single batch) 만들기 ...\nevalcb() = @show(loss(test_x, test_y))\n\nFlux.train!(objective, data, opt,\n            cb = throttle(evalcb, 5))"
},

{
    "location": "Flux/data/onehot/#",
    "page": "원-핫 인코딩",
    "title": "원-핫 인코딩",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/data/onehot/#원-핫-인코딩(One-Hot-Encoding)-1",
    "page": "원-핫 인코딩",
    "title": "원-핫 인코딩(One-Hot Encoding)",
    "category": "section",
    "text": "참true, 거짓false 혹은 고양이cat, 강아지dog 와 같은 범주형 변수(categorical variables)로 인코딩 해 보자. \"one-of-k\" 또는 \"one-hot\" 형식이 되고 Flux는 onehot 함수로 쉽게 할 수 있다.julia> using Flux: onehot\n\njulia> onehot(:b, [:a, :b, :c])\n3-element Flux.OneHotVector:\n false\n  true\n false\n\njulia> onehot(:c, [:a, :b, :c])\n3-element Flux.OneHotVector:\n false\n false\n  true역함수는 argmax (불리언 이나 일반 확률 분포(general probability distribution)를 인자로 받는다) 이다.julia> argmax(ans, [:a, :b, :c])\n:c\n\njulia> argmax([true, false, false], [:a, :b, :c])\n:a\n\njulia> argmax([0.3, 0.2, 0.5], [:a, :b, :c])\n:c"
},

{
    "location": "Flux/data/onehot/#배치(Batches)-1",
    "page": "원-핫 인코딩",
    "title": "배치(Batches)",
    "category": "section",
    "text": "onehotbatch는 원-핫 벡터의 배치(batch, 매트릭스)를 만들어 준다. argmax는 매트릭스를 배치로 취급한다.julia> using Flux: onehotbatch\n\njulia> onehotbatch([:b, :a, :b], [:a, :b, :c])\n3×3 Flux.OneHotMatrix:\n false   true  false\n  true  false   true\n false  false  false\n\njulia> onecold(ans, [:a, :b, :c])\n3-element Array{Symbol,1}:\n  :b\n  :a\n  :b위의 연산은 Array 대신 OneHotVector와 OneHotMatrix를 돌려준다. OneHotVector는 일반적인 벡터처럼 동작하는데 정수 인덱스를 바로 사용하여 불필요한 계산 비용이 들지 않도록 처리한다. 예를 들어 매트릭스와 원-핫 벡터을 곱하는 경우, 내부적으로는 매트릭스에서 관련된 행만을 잘라내는 식으로 처리한다."
},

{
    "location": "Flux/gpu/#",
    "page": "GPU 지원",
    "title": "GPU 지원",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/gpu/#GPU-지원-1",
    "page": "GPU 지원",
    "title": "GPU 지원",
    "category": "section",
    "text": "GPU 같이 하드웨어 백엔드로 하는 배열 연산의 지원은 CuArrays와 같은 외부 패키지를 제공한다. Flux는 배열의 타입을 정하지 않았기에(agnostic) 모델 가중치(weights)와 데이터를 GPU에 옮겨주면 Flux가 이를 다룰 수 있다.예를 들어, CuArrays (cu 컨버터로 변환)를 사용하여 기본 예제를 NVIDIA GPU에서 돌릴 수 있다.using CuArrays\n\nW = cu(rand(2, 5)) # 2×5 CuArray\nb = cu(rand(2))\n\npredict(x) = W*x .+ b\nloss(x, y) = sum((predict(x) .- y).^2)\n\nx, y = cu(rand(5)), cu(rand(2)) # 더미 데이터\nloss(x, y) # ~ 3파라미터 (W, b)와 데이터 세트 (x, y)를 cuda 배열로 변환하였다. 도함수(derivatives)와 훈련 값은 전과 동일하다.Dense 레이어나 Chain 같은 조립 모델(structured model)를 정의하였으면, 내부 파라미터를 변환시켜야 한다. Flux에서 제공하는 mapleaves 함수로 모델의 모든 파라미터를 한꺼번에 변경할 수 있다.d = Dense(10, 5, σ)\nd = mapleaves(cu, d)\nd.W # Tracked CuArray\nd(cu(rand(10))) # CuArray output\n\nm = Chain(Dense(10, 5, σ), Dense(5, 2), softmax)\nm = mapleaves(cu, m)\nd(cu(rand(10)))편의상 Flux는 gpu 함수를 제공하여 GPU가 이용 가능한 경우 모델과 데이터를 GPU로 변환하게 한다. 그냥은 암것도 안하지만 CuArrays 를 로딩(using CuArrays)한 경우는 데이터를 GPU에 옮겨준다.julia> using Flux, CuArrays\n\njulia> m = Dense(10,5) |> gpu\nDense(10, 5)\n\njulia> x = rand(10) |> gpu\n10-element CuArray{Float32,1}:\n 0.800225\n ⋮\n 0.511655\n\njulia> m(x)\nTracked 5-element CuArray{Float32,1}:\n -0.30535\n ⋮\n -0.618002비슷한 용도로 cpu는 모델과 데이터를 GPU에서 그만돌리게 한다.julia> x = rand(10) |> gpu\n10-element CuArray{Float32,1}:\n 0.235164\n ⋮\n 0.192538\n\njulia> x |> cpu\n10-element Array{Float32,1}:\n 0.235164\n ⋮\n 0.192538"
},

{
    "location": "Flux/saving/#",
    "page": "저장 & 불러오기",
    "title": "저장 & 불러오기",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/saving/#모델을-저장하고-불러오기-1",
    "page": "저장 & 불러오기",
    "title": "모델을 저장하고 불러오기",
    "category": "section",
    "text": "모델을 저장하고는 차후에 이를 불러들여 실행하고 싶은가. 가장 쉬운 방법은 BSON.jl 이다.모델을 저장하자:julia> using Flux\n\njulia> model = Chain(Dense(10,5,relu),Dense(5,2),softmax)\nChain(Dense(10, 5, NNlib.relu), Dense(5, 2), NNlib.softmax)\n\njulia> using BSON: @save\n\njulia> @save \"mymodel.bson\" model불러오기:julia> using Flux\n\njulia> using BSON: @load\n\njulia> @load \"mymodel.bson\" model\n\njulia> model\nChain(Dense(10, 5, NNlib.relu), Dense(5, 2), NNlib.softmax)모델은 보통의 줄리아 타입이다. 따라서 줄리아 저장 포맷이면 어느 것이라도 사용할 수 있다. BSON.jl은 특히 잘 지원하며 앞으로도 되도록 호환을 유지한다 (지금 저장한 모델이 Flux의 차후 버전에서도 불러들일 수 있게).note: Note\nGPU에 모델의 가중치를 저장하였으면, GPU 지원이 안되는 경우에는 이를 불러 들일 수 없다. 저장하기 전에 모델을 CPU로 돌려놓기 에서의 cpu(model)를 해주는게 가장 좋은 방법이다."
},

{
    "location": "Flux/saving/#모델-가중치-저장하기-1",
    "page": "저장 & 불러오기",
    "title": "모델 가중치 저장하기",
    "category": "section",
    "text": "어떤 경우는 저장은 모델 파라미터만 하고 코드에서 모델 아키텍처를 재구성하는게 유용한 방법일 수 있다. params(model)로 모델 파라미터를 구할 수 있다. data.(params)을 하면 추적 내역 데이터를 지울 수 있다.julia> using Flux\n\njulia> model = Chain(Dense(10,5,relu),Dense(5,2),softmax)\nChain(Dense(10, 5, NNlib.relu), Dense(5, 2), NNlib.softmax)\n\njulia> weights = Tracker.data.(params(model));\n\njulia> using BSON: @save\n\njulia> @save \"mymodel.bson\" weightsFlux.loadparams!로 쉽게 모델에 파라미터를 불러들일 수 있다.julia> using Flux\n\njulia> model = Chain(Dense(10,5,relu),Dense(5,2),softmax)\nChain(Dense(10, 5, NNlib.relu), Dense(5, 2), NNlib.softmax)\n\njulia> using BSON: @load\n\njulia> @load \"mymodel.bson\" weights\n\njulia> Flux.loadparams!(model, weights)새로 뜬 model은 전에 파라미터 저장한 것과 일치한다."
},

{
    "location": "Flux/saving/#체크포인팅-1",
    "page": "저장 & 불러오기",
    "title": "체크포인팅",
    "category": "section",
    "text": "장시간 훈련에 있어 주기적으로 모델을 저장하는 것은 참 좋은 생각이다. 그러면 훈련이 중단되어도 (파워가 나가는 등등의 이유로) 다시 재개할 수 있다. 그러기 위해서는 train!의 컬백 함수에서 모델을 저장하면 된다.using Flux: throttle\nusing BSON: @save\n\nm = Chain(Dense(10,5,relu),Dense(5,2),softmax)\n\nevalcb = throttle(30) do\n  # loss 보기\n  @save \"model-checkpoint.bson\" model\nend이러면 \"model-checkpoint.bson\" 파일을 30초마다 업데이트 한다.훈련시키는 동안에 모델을 연달아 저장하는 까리한 방법도 있는데 예를 들면@save \"model-$(now()).bson\" model이렇게 하면 \"model-2018-03-06T02:57:10.41.bson\"과 같이 연달아서 모델이 저장된다. 현 테스트 세트 loss도 저장할 수 있어서, 오버피팅 시작한다 싶으면 이전 사본의 모델로 복구를 쉽게 할 수 있다.@save \"model-$(now()).bson\" model loss = testloss()모델의 최적화 상태까지도 저장할 수 있으니, 정확하게 중단된 지점부터 이어 훈련을 재개할 수 있다.opt = ADAM(params(model))\n@save \"model-$(now()).bson\" model opt"
},

{
    "location": "Flux/community/#",
    "page": "커뮤니티",
    "title": "커뮤니티",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/community/#커뮤니티-1",
    "page": "커뮤니티",
    "title": "커뮤니티",
    "category": "section",
    "text": "모든 Flux 사용자는 커뮤니티 참여에 적극 환영한다. Julia 포럼, 슬랙 (채널 #machine-learning), 또는 Flux의 Gitter 를 이용하자. 질문이나 이슈에 대해 도울 것이다.Flux를 해킹하는데 관심이 있으면, 소스 코드는 열려 있고 이해하기 쉽다 – 일반적인 줄리아 코드로 되어 있다. intro 이슈 부터 관심있게 살펴보고 시작해 보자.🦉 번역 완료 2018-03-12"
},

{
    "location": "DataFlow/vertices/#",
    "page": "DataFlow 버티스(vertices)",
    "title": "DataFlow 버티스(vertices)",
    "category": "page",
    "text": "🦉 https://github.com/MikeInnes/DataFlow.jl/blob/master/docs/vertices.md 번역똥 좀 많이 누고 나서DataFlow provides two things, a graph data structure and a common syntax for describing graphs. You're not tied down to using either of these things; you could use the syntax and immediately convert graphs to an adjacency matrix for processing, for example, or you could generate the graphs through other means while taking advantage of DataFlow's library of common graph operations.DataFlow explicitly keeps the data structure very simple and doesn't try to attach any kind of meaning to it. The graphs could represent straightforward Julia programs, or Bayesian networks, or an electrical circuit. Libraries using DataFlow will probably want to extend the syntax and manipulate the graph in order to generate appropriate code for the application."
},

{
    "location": "DataFlow/vertices/#Data-Structures-1",
    "page": "DataFlow 버티스(vertices)",
    "title": "Data Structures",
    "category": "section",
    "text": "DataFlow actually comes with two related data structures, the DVertex and the IVertex. Both represent nodes in a graph with inputs/outputs to/from other nodes in the graph. IVertex is input-linked, somewhat like a linked list – it keeps a reference to nodes which serve as input. DVertex is doubly-linked, analogous to a doubly-linked list – it refers to its input as well as all the nodes which take it as input. DVertex are technically more expressive but are also much harder to work with, so it's usually best to convert to input-linked as soon as possible (via DataFlow.il() for example).# src/graph/graph.jl\nabstract type Vertex{T} end\n\n# src/graph/ilgraph.jl\nstruct IVertex{T} <: Vertex{T}\n  value::T\n  inputs::Vector{IVertex{T}}\n  # outputs::Set{IVertex{T}} # DVertex has this in addition\nendIVertex can be seen as very similar to an Expr object in Julia. For example, the expression x+length(xs) will be stored in a very similar way:julia> using DataFlow\n\njulia> x = 2\n2\n\njulia> Expr(:call, :+, x, Expr(:call, :length, :xs))\n:(2 + length(xs))\n\njulia> IVertex(:+, IVertex(:x), IVertex(:length, IVertex(:xs)))\nIVertex{Symbol}(x() + length(xs()))The key difference is that object identity is important in DataFlow graphs. Say we build an expression tree like this:julia> foo = Expr(:call, :length, :xs)\n:(length(xs))\n\njulia> Expr(:call, :+, foo, foo)\n:(length(xs) + length(xs))This prints as length(xs)+length(xs) regardless of the fact that we reused the length(xs) expression object. In DataFlow the reuse makes a big difference:julia> g = IVertex{Any}\nIVertex\n\njulia> g(:+, g(:length, g(:xs)), g(:length, g(:xs)))\nIVertex(length(xs()) + length(xs()))\n\njulia> foo = g(:length, g(:xs))\nIVertex(length(xs()))\n\njulia> g(:+, foo, foo)\nIVertex(\neland = length(xs())\neland + eland)The reuse is now encoded in the program graph. Note that the data structure above has no conception of a \"variable\" since the flow of data is directly represented; instead, variables will be generated for us if and when they are needed in the syntax conversion."
},

{
    "location": "DataFlow/vertices/#Algorithms-1",
    "page": "DataFlow 버티스(vertices)",
    "title": "Algorithms",
    "category": "section",
    "text": "The basic approach to working with DataFlow graphs is to use the same techniques as are used for trees in functional programming. That is, you can write algorithms which generate a new graph by recursively walking over the old one. This is packaged up in functions like prewalk and postwalk which allow you apply a function to each node in the graph.For example:julia> using DataFlow: postwalk, value\n\njulia> foo = g(:+, g(:length, g(:xs)), g(:length, g(:ys)))\nIVertex(length(xs()) + length(ys()))\n\njulia> postwalk(foo) do v\n         value(v) == :length && value(v[1]) == :xs ? g(:lx) : v\n       end\nIVertex(lx() + length(ys()))(The difference between pre- and postwalk is the order of traversal, which you can see using @show.) In this way you can do things like find and replace on graphs, as well as more complex structural transformations. At this point we also have everything we need to implement common subexpression elimination:julia> cse(v::IVertex, cache = Dict()) =\n         postwalk(x -> get!(cache, x, x), v)\ncse (generic function with 2 methods)We replace each node in the graph by retrieving it from a dict where values refer to themselves. This ensures that any values that are == will also be === in the resulting graph, so that common expressions are reused.julia> foo = @flow length(xs)+length(xs)\nIVertex(length(xs) + length(xs))\n\njulia> cse(foo)\nIVertex(\neland = length(xs)\neland + eland)Generally you should be able to stick to using DataFlow's high-level operations like postwalk, but in some cases you may need to write a recursive algorithm from scratch. This looks exactly like writing the same algorithm over a tree, with the caveats that (1) identical nodes may be reached by more than one route down the tree and (2) there may be cycles in the graph which cause infinite loops for naive recursion. This sounds like a nightmare but in fact we can kill these two tricky birds with a single stone; we simply memoize the function so that visiting repeated nodes ends the recursion. Make sure to cache the result of the current call before recursing.julia> using DataFlow: value, inputs, thread!\n\njulia> function replace_xs(g, cache = ObjectIdDict())\n         # Early exit if we've already processed this node\n         haskey(cache, g) && return cache[g]\n         # Create the new (empty) node and cache it\n         cache[g] = g′ = typeof(g)(value(g) == :xs ? :foo : value(g))\n         # For each input of the original node, process it and push\n         # the result into the new node\n         thread!(g′, (replace_xs(v, cache) for v in inputs(g))...)\n       end\nreplace_xs (generic function with 2 methods)\n\njulia> foo = DataFlow.cse(@flow length(xs)+length(xs))\nIVertex(\nalligator = length(xs)\nalligator + alligator)\n\njulia> replace_xs(foo)\nIVertex(\nalligator = length(xs)\nalligator + alligator)In this case forgetting the cache would result in a fairly un-disastrous length(foo)+length(foo), but in other cases it could result in a hang."
},

{
    "location": "MacroTools/README/#",
    "page": "MacroTools README",
    "title": "MacroTools README",
    "category": "page",
    "text": "🦉  https://github.com/MikeInnes/MacroTools.jl README.md 번역"
},

{
    "location": "MacroTools/README/#MacroTools.jl-1",
    "page": "MacroTools README",
    "title": "MacroTools.jl",
    "category": "section",
    "text": "This library provides helpful tools for writing macros, notably a very simple but powerful templating system and some functions that have proven useful to me (see utils.jl.)"
},

{
    "location": "MacroTools/README/#Template-Matching-1",
    "page": "MacroTools README",
    "title": "Template Matching",
    "category": "section",
    "text": "Template matching enables macro writers to deconstruct Julia expressions in a more declarative way, and without having to know in great detail how syntax is represented internally. For example, say you have a type definition:julia> ex = quote\n         struct Foo\n           x::Int\n           y\n         end\n       end\nquote  # REPL[1], line 2:\n    struct Foo # REPL[1], line 3:\n        x::Int # REPL[1], line 4:\n        y\n    end\nendIf you know what you're doing, you can pull out the name and fields via:julia> (ex.args[2].args[2], ex.args[2].args[3].args)\n(:Foo, Any[:( # REPL[2], line 3:), :(x::Int), :( # REPL[2], line 4:), :y])But this is hard to write – since you have to deconstruct the type expression by hand – and hard to read, since you can't tell at a glance what's being achieved. On top of that, there's a bunch of messy stuff to deal with like pesky begin blocks which wrap a single expression, line numbers, etc. etc.Enter MacroTools:julia> using MacroTools\n\njulia> @capture ex  struct T_ fields__ end\ntrue\n\njulia> T, fields\n(:Foo, Any[:(x::Int), :y])Symbols like T_ underscore are treated as catchalls which match any expression, and the expression they match is bound to the (underscore-less) variable, as above.Because @capture doubles as a test as well as extracting values, you can easily handle unexpected input (try writing this by hand):julia> @capture(ex, f_{T_}(xs__) = body_) ||\n         error(\"expected a function with a single type parameter\")\nERROR: expected a function with a single type parameter\nStacktrace:\n [1] error(::String) at ./error.jl:21Symbols like f__ (double underscored) are similar, but slurp a sequence of arguments into an array. For example:julia> @capture :[1, 2, 3, 4, 5, 6, 7]  [1, a_, 3, b__, c_]\ntrue\n\njulia> a, b, c\n(2, Any[4, 5, 6], 7)Slurps don't have to be at the end of an expression, but like the Highlander there can only be one (per expression)."
},

{
    "location": "MacroTools/README/#Matching-on-expression-type-1",
    "page": "MacroTools README",
    "title": "Matching on expression type",
    "category": "section",
    "text": "@capture can match expressions by their type, which is either the head of Expr objects or the typeof atomic stuff like Symbols and Ints. For example:julia> @capture :(foo(\"\"))  foo(x_String_string)\ntrue\n\njulia> @capture :(foo(\"$(a)\"))  foo(x_String_string)\ntrueThis will match a call to the foo function which has a single argument, which may either be a String object or a Expr(:string, ...) (e.g. @capture(:(foo(\"$(a)\")), foo(x_String_string))). Julia string literals may be parsed into either type of object, so this is a handy way to catch both.Another common use case is to catch symbol literals, e.g.julia> @capture ex  struct T_Symbol fields__ end\ntrue\n\njulia> T, fields\n(:Foo, Any[:(x::Int), :y])which will match e.g. struct Foo ... but not struct Foo{V} ...julia> @capture :(struct Foo{V} a end)  struct T_ fields__ end\ntrue\n\njulia> T\n:(Foo{V})\n\njulia> @capture :(struct Foo{V} a end)  struct T_Symbol fields__ end\nfalse"
},

{
    "location": "MacroTools/README/#Unions-1",
    "page": "MacroTools README",
    "title": "Unions",
    "category": "section",
    "text": "@capture can also try to match the expression against one pattern or another, for example:julia> @capture :(g() = 0)           (f_(args__) = body_) | function f_(args__) body_ end\ntrue\n\njulia> @capture :(function g() end)  (f_(args__) = body_) | function f_(args__) body_ end\ntruewill match both kinds of function syntax (though it's easier to use shortdef to normalise definitions). You can also do this within expressions, e.g.julia> @capture :(g() = 0)             f_(args__) | f_(args__) where T_ = body_\ntrue\n\njulia> T\n\njulia> @capture :(g(::T) where T = 0)  f_(args__) | f_(args__) where T_ = body_\ntrue\n\njulia> T\n:Tmatches a function definition, with a single type parameter bound to T if possible. If not, T = nothing."
},

{
    "location": "MacroTools/README/#Expression-Walking-1",
    "page": "MacroTools README",
    "title": "Expression Walking",
    "category": "section",
    "text": "If you've ever written any more interesting macros, you've probably found yourself writing recursive functions to work with nested Expr trees. MacroTools' prewalk and postwalk functions factor out the recursion, making macro code much more concise and robust.These expression-walking functions essentially provide a kind of find-and-replace for expression trees. For example:julia> using MacroTools: prewalk, postwalk\n\njulia> postwalk(x -> x isa Integer ? x + 1 : x, :(2+3))\n:(3 + 4)In other words, look at each item in the tree; if it's an integer, add one, if not, leave it alone.We can do more complex things if we combine this with @capture. For example, say we want to insert an extra argument into all function calls:julia> ex = quote\n           x = f(y, g(z))\n           return h(x)\n       end\nquote  # REPL[137], line 2:\n    x = f(y, g(z)) # REPL[137], line 3:\n    return h(x)\nend\n\njulia> postwalk(x -> @capture(x, f_(xs__)) ? :($f(5, $(xs...))) : x, ex)\nquote  # REPL[137], line 2:\n    x = f(5, y, g(5, z)) # REPL[137], line 3:\n    return h(5, x)\nendMost of the time, you can use postwalk without worrying about it, but we also provide prewalk. The difference is the order in which you see sub-expressions; postwalk sees the leaves of the Expr tree first and the whole expression last, while prewalk is the opposite.julia> postwalk(x -> @show(x) isa Integer ? x + 1 : x, :(2+3*4));\nx = :+\nx = 2\nx = :*\nx = 3\nx = 4\nx = :(4 * 5)\nx = :(3 + 4 * 5)\n\njulia> prewalk(x -> @show(x) isa Integer ? x + 1 : x, :(2+3*4));\nx = :(2 + 3 * 4)\nx = :+\nx = 2\nx = :(3 * 4)\nx = :*\nx = 3\nx = 4A significant difference is that prewalk will walk into whatever expression you return.julia> postwalk(x -> @show(x) isa Integer ? :(a+b) : x, 2)\nx = 2\n:(a + b)\n\njulia> prewalk(x -> @show(x) isa Integer ? :(a+b) : x, 2)\nx = 2\nx = :+\nx = :a\nx = :b\n:(a + b)This makes it somewhat more prone to infinite loops; for example, if we returned :(1+b) instead of :(a+b), prewalk would hang trying to expand all of the 1s in the expression.With these tools in hand, a useful general pattern for macros is:julia> macro foo(ex)\n           postwalk(ex) do x\n               @capture(x, a_*b_) || return x\n               return (a, b)\n           end\n       end\n@foo (macro with 1 method)\n\njulia> @foo 2\n2\n\njulia> @foo 2x\n(2, :x)\n\njulia> @foo 2x * 3\n((2, :x), 3)"
},

{
    "location": "MacroTools/README/#Function-definitions-1",
    "page": "MacroTools README",
    "title": "Function definitions",
    "category": "section",
    "text": "splitdef(def) matches a function definition of the formfunction name{params}(args; kwargs)::rtype where {whereparams}\n   body\nendand returns Dict(:name=>..., :args=>..., etc.). The definition can be rebuilt by calling MacroTools.combinedef(dict), or explicitly withjulia> dict = splitdef(:(f() = 0))\nDict{Symbol,Any} with 5 entries:\n  :name        => :f\n  :args        => Any[]\n  :kwargs      => Any[]\n  :body        => quote …\n  :whereparams => ()\n\njulia> rtype = get(dict, :rtype, :Any)\n:Any\n\njulia> all_params = [get(dict, :params, [])..., get(dict, :whereparams, [])...]\n0-element Array{Any,1}\n\njulia> :(function $(dict[:name]){$(all_params...)}($(dict[:args]...);\n                                                   $(dict[:kwargs]...))::$rtype\n             $(dict[:body])\n         end)\n:(function f{}(; )::Any # REPL[83], line 3:\n        begin\n            0\n        end\n    end)splitarg(arg) matches function arguments (whether from a definition or a function call) such as x::Int=2 and returns (arg_name, arg_type, default). default is nothing when there is none. For example:julia> map(splitarg, (:(f(a=2, x::Int=nothing, y))).args[2:end])\n3-element Array{Tuple{Symbol,Symbol,Bool,Any},1}:\n (:a, :Any, false, 2)\n (:x, :Int, false, :nothing)\n (:y, :Any, false, nothing)"
},

{
    "location": "FluxJS/README/#",
    "page": "FluxJS README",
    "title": "FluxJS README",
    "category": "page",
    "text": "🦉 https://github.com/FluxML/FluxJS.jl README.md 번역"
},

{
    "location": "FluxJS/README/#Flux.JS-1",
    "page": "FluxJS README",
    "title": "Flux.JS",
    "category": "section",
    "text": "Run Flux models in the browser, via deeplearn.js."
},

{
    "location": "FluxJS/README/#JS-Output-1",
    "page": "FluxJS README",
    "title": "JS Output",
    "category": "section",
    "text": "You can see what Flux.JS sees with @code_js, which works like @code_typed or @code_native. Flux.JS simply accepts a function of arrays along with example inputs, and generates JavaScript code for you. Here's the simplest possible example:julia> using FluxJS\n\njulia> x = rand(10)\n10-element Array{Float64,1}:\n 0.882192\n 0.362089\n 0.784539\n 0.308894\n 0.869722\n 0.381076\n 0.00467682\n 0.0734247\n 0.55711\n 0.6387\n\njulia> @code_js identity(x)\nlet model = (function () {\n  let math = dl.ENV.math;\n  function model(jay) {\n    return jay;\n  };\n  model.weights = [];\n  return model;\n})();\nflux.fetchWeights(\"model.bson\").then((function (ws) {\n  return model.weights = ws;\n}));You can see that there's some setup code as Flux.JS expects to load some weights for a model. But the core of it is this function, which is exactly like the identity function in Julia.function model(kinkajou) {\n  return kinkajou;\n};Let's try something more interesting; f takes two arguments and multiplies them.julia> f(W,x) = W*x\nf (generic function with 1 method)\n\njulia> @code_js f(rand(5,10),rand(10))\nlet model = (function () {\n  let math = dl.ENV.math;\n  function model(jay, buffalo) {\n    return math.matrixTimesVector(jay, buffalo);\n  };\n  model.weights = [];\n  return model;\n})();\nflux.fetchWeights(\"model.bson\").then((function (ws) {\n  return model.weights = ws;\n}));Because Flux models are just Julia functions, we can use the same macro with them too. You'll now notice that the weights are being used.julia> using Flux\n\njulia> m = Chain(Dense(10,5,relu),Dense(5,2),softmax)\nChain(Dense(10, 5, NNlib.relu), Dense(5, 2), NNlib.softmax)\n\njulia> @code_js m(x)\nlet model = (function () {\n  let math = dl.ENV.math;\n  function jay(buffalo) {\n    return math.add(math.matrixTimesVector(model.weights[0], buffalo), model.weights[1]);\n  };\n  function gnat(donkey) {\n    return math.relu(math.add(math.matrixTimesVector(model.weights[2], donkey), model.weights[3]));\n  };\n  function model(moose) {\n    return math.softmax(jay(gnat(moose)));\n  };\n  model.weights = [];\n  return model;\n})();\nflux.fetchWeights(\"model.bson\").then((function (ws) {\n  return model.weights = ws;\n}));There is also early support for RNNs (we compile stateful models directly, no unrolling).julia> m = Chain(RNN(10,5))\n\njulia> @code_js m(x)\nlet model = (function () {\n  let math = dl.ENV.math;\n  let init = [0.017732, 0.00991122, -0.00712077, -0.00161244, -0.00232475];\n  let states = init.slice();\n  function nightingale(seal, mongoose) {\n    return [seal, mongoose];\n  };\n  function cat(horse) {\n    let weasel = math.tanh(math.add(math.add(math.matrixTimesVector(model.weights[0], horse), math.matrixTimesVector(model.weights[1], states[0])), model.weights[2]));\n    let coati = nightingale(weasel, weasel);\n    states[0] = coati[1];\n    return coati[2];\n  };\n  function model(fish) {\n    return cat(fish);\n  };\n  model.reset = (function () {\n    states = init.slice();\n    return;\n  });\n  model.weights = [];\n  return model;\n})();\nflux.fetchWeights(\"model.bson\").then((function (ws) {\n  return model.weights = ws;\n}));In general, the more useful entry point to the package is FluxJS.compile.julia> FluxJS.compile(\"mnist\", m, rand(10))This will produce two files in the current directory: (1) mnist.js, which contains the same JavaScript code as above; (2) mnist.bson, which contains the model weights in a JS-loadable format."
},

{
    "location": "FluxJS/README/#Browser-Setup-1",
    "page": "FluxJS README",
    "title": "Browser Setup",
    "category": "section",
    "text": "Firstly, you'll need the following scripts in your <head>. The flux.js script can be found here.<head>\n  <script src=\"https://unpkg.com/deeplearn\"></script>\n  <script src=\"https://unpkg.com/bson/browser_build/bson.js\"></script>\n  <script src=\"flux.js\"></script> <!-- Or embed the script directly -->\n</head>From here, you can either link the generated code as another script, or embed it directly. In real applications you'll most likely want to wait on the fetchWeights promise, to avoid trying to use the model before it's ready.<script>\nlet model = (function () {\n  let math = dl.ENV.math;\n  function model(kinkajou) {\n    return kinkajou;\n  };\n  model.weights = [];\n  return model;\n})();\nflux.fetchWeights(\"model.bson\").then((function (ws) {\n  return model.weights = ws;\n}));\n</script>In the page, you can run the model from the dev tools.> x = dl.tensor([1,2,3,4,5,6,7,8,9,10])\n  Tensor {isDisposed: false, size: 10, shape: Array(1), dtype: \"float32\", strides: Array(0), …}\n> await model(x).data()\n  Float32Array(25) [0.0262143611907959, -0.04852187633514404, …]See the deeplearn.js docs for more information on how to work with its tensor objects."
},

{
    "location": "soc/guidelines/#",
    "page": "Application Guidelines",
    "title": "Application Guidelines",
    "category": "page",
    "text": "https://julialang.org/soc/guidelines/"
},

{
    "location": "soc/guidelines/#Before-the-Application-1",
    "page": "Application Guidelines",
    "title": "Before the Application",
    "category": "section",
    "text": "Before you apply, it's a good idea to get in touch with the Julia community. Ask questions on Discourse or join the Julia Slack to get connected with potential mentors to help find interesting projects. The Slack channel #jsoc is dedicated to helping students get the help they need. Additionally, you should make use of these connections to start making some small contributions and progress on your project early on. While PRs before the applications are not required, GSoC is extremely competitive, so the more ways you have to show your commitment, the better."
},

{
    "location": "soc/guidelines/#Application-Instructions-1",
    "page": "Application Guidelines",
    "title": "Application Instructions",
    "category": "section",
    "text": "GSoC applications must be submitted to https://summerofcode.withgoogle.com. We recommend having a mentor to help you with the application process. Please feel free to share your draft applications in the #jsoc channel of the Slack to receive feedback.Our organization does not have page or formatting requirements, but we recommend building a formal PDF document of less than 10 pages which is formatted using Word or LaTeX. If you have any questions, contact the Julia GSoC administrators at summerofcode@julialang.org."
},

{
    "location": "soc/guidelines/#Application-Guidelines-1",
    "page": "Application Guidelines",
    "title": "Application Guidelines",
    "category": "section",
    "text": "Applications are free-form, so you can discuss your project in whatever way you feel is best. The key questions we will ask ourselves when considering it are:Is the student committed to the project?\nIs the plan a reasonable amount to do in three months?\nAre there clear milestones we can use to assess progress (it should be easy to answer the question \"Is the project done?\").In more detail, you may find it useful to consider the following questions:The Project\nWhat do you want to have completed by the end of the program?\nFor example, \"a package for doing X which any Julia user can install\" or \"an extra feature for Foo.jl that does Y\"\nWho's interested in the work, and how will it benefit them?\nFor example, \"bioinformaticians will be able to set up sequencing pipelines flexibly in pure Julia\"\nIt's important to justify the project for people who may not be experts in your subject area.\nWhat are the potential hurdles you might encounter, and how can you resolve them?\nIs there anything you need to learn about as part of the work? Does your work depend on anyone else's to make progress?\nHow will you prioritize different aspects of the project like features, API usability, documentation, and robustness?\nWhat milestones can you target throughout the period?\nFor example, getting a working prototype out to beta testers by the halfway point\nAre there any stretch goals you can make if the main project goes smoothly? Tell us how you're going to wow us with the final result!\nCode portfolio. Show us a sample or two of code that you're proud of. Itdoesn't have to be Julia (but that doesn't hurt either). You don't need to be a star programmer as long as you can demonstrate interest in and commitment to your project.Deliverables List what concrete products expect to deliver by the end ofthe projectAbout you. Why you? Give us a sense of who you are as a person and as a programmer.\nWhat academic, professional or hobby programming experience do you have, and how will it help you with your project?\nHave you contributed to open source projects before? (Link us to some issues and patches, if any)\nWhy are you interested in Julia? Have you used it much before? You need to demonstrate your ability to use Julia by the beginning of the GSoC. GSoC is not for learning the Julia language, though extensive prior experience is not required.\nDo you have the mathematical/scientific background for your project? Many of the Julialang projects have a significant portion that require technical expertise and applicants need to demonstrate their ability to handle the chosen project.\nHow should we contact you? Let us know your email address and GitHub username.\nDo you have a website or blog?\nAnything else you'd like to mention!\nLogistics.\nWhat other time commitments, such as summer courses, other jobs, planned vacations, etc., will you have over the summer?"
},

{
    "location": "soc/projects/ml/#",
    "page": "Data Science & Machine Learning",
    "title": "Data Science & Machine Learning",
    "category": "page",
    "text": "https://julialang.org/soc/projects/ml.htmlNote that for any of these projects you should have code samples as part of your application, ideally as patches to one of the ML or GPU libraries or in the form of working ML models."
},

{
    "location": "soc/projects/ml/#Model-Zoo-Examples-1",
    "page": "Data Science & Machine Learning",
    "title": "Model Zoo Examples",
    "category": "section",
    "text": "Flux's model zoo contains examples of a wide range of deep learning models and techniques. This project would involve adding new models, showing how to recreate state-of-the-art results (e.g. AlphaGo) or interesting and unusual model architectures (e.g. transformer networks). We'd be particularly interested in any models involving reinforcement learning, or anything with images, sound or speech.Some experience with implementing deep learning models would be ideal for this project, but is not essential for a student willing to pick up the skills and read ML papers. It's up to you whether you implement a single ambitious model, or multiple small ones.Mentors: Mike Innes"
},

{
    "location": "soc/projects/ml/#Flux.JS-demos-1",
    "page": "Data Science & Machine Learning",
    "title": "Flux.JS demos",
    "category": "section",
    "text": "Flux.JS enables export of Flux models to the browser. However, just porting a numerical function to JavaScript is rarely exciting on its own; you need to build an interface to give input to the model (say, via a webcam) and see output (say, by displaying an annotated image) in order to see what the model is thinking.This project would involve creating new demos that show interesting models running in the browser. Examples could include:An MNIST digit classify running on hand-drawn images;\nHandwriting generation;\nLive speech recognition or production;\nAn autoencoder that allows moving sliders to generate images, and explore \"digit space\";\nA Chess or Go AI that plays against the user;\nA language analysis tool that classifies user-written text.The possibilities are pretty much endless here. This project will require a pretty solid handle on web technologies, and we'd expect much of the components created to be reusable between demos.Mentors: Mike Innes, Shashi Gowda."
},

{
    "location": "soc/projects/ml/#Model-Import-and-Export-1",
    "page": "Data Science & Machine Learning",
    "title": "Model Import and Export",
    "category": "section",
    "text": "Sharing models with other frameworks would enables us to both export models (say to JavaScript for the browser, or TensorFlow Lite for mobile, or NNVM for optimised training) and to take advantage of the large set of trained models in the wild in Julia code.This involves several stages, some or all of which could be tackled over the course of a project.Reading and writing the raw model formats. For formats like ONNX this should be relatively easy, as one can use the ProtoBuf.jl library.\nFor model import:\nConverting the raw model format to a more general graph format, such as a DataFlow.jl graph.\nDumping the model graph as Julia code.\nFor model export:\nConverting a general graph format to the raw model constructs.\nTracing Julia code to produce a dataflow graph, as in FluxJS.jl.Mentors: Mike Innes"
},

{
    "location": "soc/projects/ml/#Benchmarks-1",
    "page": "Data Science & Machine Learning",
    "title": "Benchmarks",
    "category": "section",
    "text": "A benchmark suite would help us to keep Julia's performance for ML models in shape, as well as revealing opportunities for improvement. Like the model-zoo project, this would involve contributing standard models that exercise common ML use case (images, text etc) and profiles them. The project could extend to include improving performance where possible, or creating a \"benchmarking CI\" like Julia's own nanosoldier.Mentors: Mike Innes"
},

{
    "location": "soc/projects/ml/#Compiler-Optimisations-1",
    "page": "Data Science & Machine Learning",
    "title": "Compiler Optimisations",
    "category": "section",
    "text": "Julia opens up many interesting opportunities for applying new optimisations to ML models, and exploring language design for ML. As part of this project you'd help us apply novel optimisation strategies to Julia code, with immediate benefits to Flux and other Julia users.Possible projects could include:Auto-parallelisation and vectorisation in the vain of DyNet autobatch, TensorFlow Fold and Matchbox.\nUsing Cassette and techniques similar to Flux.JS to extract dataflow computation graphs from imperative Julia code.\nApplying optimisations to computation graphs, such as eliding memory allocations, reusing memory and fusing operations, or enabling model parallelism.\nApplying Halide or Futhark-like optimisations to array expressions, as in Tokamak\nImproving Julia's GPU support, including tuning memory management and supporting CUDA streams.Mentors: Mike Innes"
},

{
    "location": "soc/projects/ml/#Sparse-GPU-and-ML-support-1",
    "page": "Data Science & Machine Learning",
    "title": "Sparse GPU and ML support",
    "category": "section",
    "text": "While Julia supports dense GPU arrays well via CuArrays, we lack up-to-date wrappers for sparse operations. This project would involve wrapping CUDA's sparse support, with CUSPARSE.jl as a starting point, adding them to CuArrays.jl, and perhaps demonstrating their use via a sparse machine learning model.Mentors: Mike Innes"
},

{
    "location": "soc/projects/ml/#Parquet.jl-enhancements-1",
    "page": "Data Science & Machine Learning",
    "title": "Parquet.jl enhancements",
    "category": "section",
    "text": "Efficient storage of tabular data is an important component of the data analysis story in the ecosystem. Julia has many options here – JLD, JuliaDB’s built-in serialization, CSV.write. These either suffer from lack of performance or lack of standardization. Parquet is a format for efficient storage of tabular data used in the Hadoop world. It has compression techniques which reduce disk usage as well as speed up reads. A well-rounded Parquet implementation in Julia will solve the current issues with storage formats and let Julia interoperate with software from the Hadoop world.Parquet.jl currently contains a reader for Parquet files. This project involves implementing the writer for Parquet files, as well as some enhancements to the reading functionality.Deliverables:Reader enhancements:Read a file as a NamedTuple of vectors (using NamedTuples.jl on Julia 0.6). This is on similar lines, but different from the current cursor-based reader. Probably as an implementation of AbstractBuilder that returns NamedTuple of column vectors, combined with a new iterator/cursor that returns a bunch of records instead of individual records.Writer support:Write a table (in the form of a NamedTuple of vectors) to disk. Note: we will use NamedTuple of vectors as a minimal table which can be converted back into DataFrames or IndexedTables\nImplement the compression features provided in the Parquet spec-Optionally auto detect compression scheme based on the data.Mentors: Tanmay Mohapatra"
},

{
    "location": "soc/projects/ml/#GPU-support-in-JuliaDB-1",
    "page": "Data Science & Machine Learning",
    "title": "GPU support in JuliaDB",
    "category": "section",
    "text": "JuliaDB is a distributed analytical database. It uses Julia’s multi-processing for parallelism at the moment. GPU implementations of some operations may allow relational algebra with low latency. In this project, you will be required to add basic GPU support in JuliaDB.Copy a table to GPU – this may be as simple as converting every column into a CuArray or GPUArray\nmap, reduce and filter operation – apply simple functions on a large table that is on the GPU\nEnsure that columnar storage format is made use of in the lower level code generated.\nThe groupby and join operations may involve first implementing an efficient sortperm that utilize the GPU, or an efficient hash table on the GPU\ngroupby kernel on GPU\njoin kernel on GPU (stretch goal)Mentors: Shashi Gowda, Mike Innes"
},

{
    "location": "soc/projects/ml/#Making-Aquiring-Open-Data-Easy-1",
    "page": "Data Science & Machine Learning",
    "title": "Making Aquiring Open-Data Easy",
    "category": "section",
    "text": "Goverments and Universities are releasing huge amounts of data under Open Data policies. Web portals such as:http://data.gov\nhttp://data.gov.au\nhttps://dataverse.harvard.edu/\nhttp://datadryad.org/\nhttps://figshare.com/Expose great quanities of data just wating to be used.DataDeps.jl is a package that helps data scientists ensures that anyone running their code has all the data it needs, no matter when or where it is run. To do this it needs a registration block, which is a chunk of julia code which says where the data can be download, who created it, what terms and conditions are on its use etc. For a simple dataset that is all in one file writing this is pretty easy – copy and paste the info from the website hosting the data. When you want to dozens of datasets, some of which have dozens of files (and no easy way to download a .zip of all of them), writing this registration block is a bit more work.DataDepsGenerators.jl exists to solve that. Give it a URL (or other identifier) for a page describing a dataset, and outputs all the code for a registration block, that you can copy and paste straight into your julia project. Right now DataDepsGenerators only supports a couple of sites: GitHub (for https://github.com/BuzzFeedNews/ and https://github.com/fivethirtyeight/data/ and others) and the UCI ML Repository. This project aims to change that by adding support for the CKAN and the OA-PMH APIs.The CKAN and the OA-PMH APIs allow the automated extraction of metadata for a dataset. They are primarily used by goverment \"data.gov.*\" sites and research repositories respectively. Together they host millions of datasets, furfilling those institutions open data policies.This project is to leverage those APIs, to allow others to leaverage those data repositories to produce easily repeatable, data driven research.Expected Results: a series of patches to DataDepsGenerators.jl, giving it the capacity to generate a DataDeps registration block for any dataset hosted on site exposing a CRAN, or OAI-PMH API.Recommended Skills: Familarity with web APIs and related technolgies (e.g. REST, JSON, XML (Probably not OAUTH, but if you've done OAUTH then your more than familar enough)). Some practice with webscraping is likely to be useful. A love of data and of doing cool things with it, is a big plus.Mentors: Lyndon White (oxinabox)"
},

{
    "location": "soc/projects/ml/#Parameter-estimation-for-nonlinear-dynamical-models-1",
    "page": "Data Science & Machine Learning",
    "title": "Parameter estimation for nonlinear dynamical models",
    "category": "section",
    "text": "Machine learning has become a popular tool for understanding data, but scientists typically understand the world through the lens of physical laws and their resulting dynamical models. These models are generally differential equations given by physical first principles, where the constants in the equations such as chemical reaction rates and planetary masses determine the overall dynamics. The inverse problem to simulation, known as parameter estimation, is the process of utilizing data to determine these model parameters.The purpose of this project is to utilize the growing array of statistical, optimization, and machine learning tools in the Julia ecosystem to build library functions that make it easy for scientists to perform this parameter estimation with the most high-powered and robust methodologies. Possible projects include investigating methods for Bayesian estimation of parameters via Stan.jl and Julia-based libraries like Turing.jl, or global optimization-based approaches. Novel techniques like classifying model outcomes via support vector machines and deep neural networks is can also be considered. Research and benchmarking to attempt to find the most robust methods will take place in this project.Some work in this area can be found in DiffEqParamEstim.jl and DiffEqBayes.jl. Examples can be found in the DifferentialEquations.jl documentation.Recommended Skills: Background knowledge of standard machine learning, statistical, or optimization techniques. It's recommended but not required that one has basic knowledge of differential equations and DifferentialEquations.jl. Using the differential equation solver to get outputs from parameters can be learned on the job, but you should already be familiar (but not necessarily an expert) with the estimation techniques you are looking to employ.Expected Results: Library functions for performing parameter estimation and inferring properties of differential equation solutions from parameters. Notebooks containing benchmarks determining the effectiveness of various methods and classifying when specific approaches are appropriate will be developed simultaneously.Mentors: Chris Rackauckas"
},

{
    "location": "soc/projects/ml/#Artificial-Intelligence-Library-Package-based-on-Artificial-Intelligence-A-Modern-Approach-(AIMA)-1",
    "page": "Data Science & Machine Learning",
    "title": "Artificial Intelligence Library Package based on Artificial Intelligence - A Modern Approach (AIMA)",
    "category": "section",
    "text": "AIMA is a seminal text on representation of agents to solve AI problems. Most packages  available today as AI libraries tend to focus on ML only and not the architectural aspect of AI. The scope of the project is to create a library with a clean API  (following AIMA) to easily allow the application of core algorithms to AI problems.  The student will implement a package that brings together implementations of algorithms  like depth-first search and simulated annealing, both from other Julia packages and  from sample code in the AIMA book, and build sample programs to demonstrate AI  applications. Starter code can be found at AIMACore along with AIMASamples.Recommended Skills: Previous experience with AI or the ability to quickly pick up on  the AI algorithms in AIMAExpected Results: A well-documented library of functions derived from the AIMA book.Mentors Sambit Kumar Dash. "
},

]}
