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
    "text": "밥 먹고 똥 싸는 곳입니다 "
},

{
    "location": "Flux/#",
    "page": "Flux 홈",
    "title": "Flux 홈",
    "category": "page",
    "text": "https://github.com/FluxML/Flux.jl 자료를 번역하는 곳입니당"
},

{
    "location": "Flux/#Flux:-줄리아-머신-러닝-라이브러리-1",
    "page": "Flux 홈",
    "title": "Flux: 줄리아 머신 러닝 라이브러리",
    "category": "section",
    "text": "Flux는 머신러닝을 위한 라이브러리. \"배터리-포함(batteries-included, 제품의 완전한 유용성을 위해 필요한 모든 부품을 함께 제공한다는 소프트웨어쪽 용어)\" 많은 유용한 도구를 제공한다. 줄리아 언어를 풀파워(full power)로 사용할 수 있다. 전체 스택을 줄리아 코드로 구현한다. GPU 커널도 가능하고, 개별 파트를 개인 취향에 맞게 조작할 수 있다."
},

{
    "location": "Flux/#설치하기-1",
    "page": "Flux 홈",
    "title": "설치하기",
    "category": "section",
    "text": "줄리아 0.6.0 이상, 아직 안깔았으면 설치하자.Pkg.add(\"Flux\")\n# 선택인데 추천\nPkg.update() # 패키지를 최신 버전으로 업뎃\nPkg.test(\"Flux\") # 설치 똑바로 된건가 확인하기기본적인 것 부터 시작하자. 동물원 모델(model zoo)은 여러가지 공통 모델을 다루는데 그걸로 시작해도 좋다."
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
    "text": "간단한 linear regression(리니어 리그레션, 직선 모양으로 그려지는 함수)을 생각해 보자. 이것은 입력 x에 대한 출력 배열 y를 예측한다. (줄리아 REPL에서 예제를 따라해보면 좋다)julia> W = rand(2, 5)\n2×5 Array{Float64,2}:\n 0.857747   0.291713  0.179873  0.938979  0.51022\n 0.0852085  0.977716  0.246164  0.460672  0.772312\n\njulia> b = rand(2)\n2-element Array{Float64,1}:\n 0.663369\n 0.132996\n\njulia> predict(x) = W*x .+ b\npredict (generic function with 1 method)\n\njulia> loss(x, y) = sum((predict(x) .- y).^2)\nloss (generic function with 1 method)\n\njulia> x, y = rand(5), rand(2) # 더미 데이터\n([0.496864, 0.947507, 0.874288, 0.251528, 0.192234], [0.901991, 0.0802404])\n\njulia> loss(x, y) # ~ 3\n3.1660692660286722예측을 더 잘하기 위해 W와 b의 기울기를 구하자. loss function(손실, 예측 실패 함수)과 gradient descent(경사 하강, 내리막 기울기)를 해보면서. 직접 손으로 기울기를 계산할 수도 있지만 Flux에서는 W와 b를 훈련시키는 파라미터(parameters)로 둘 수 있다.julia> using Flux.Tracker\n\njulia> W = param(W)\nTracked 2×5 Array{Float64,2}:\n 0.857747   0.291713  0.179873  0.938979  0.51022\n 0.0852085  0.977716  0.246164  0.460672  0.772312\n\njulia> b = param(b)\nTracked 2-element Array{Float64,1}:\n 0.663369\n 0.132996\n\njulia> l = loss(x, y)\n3.1660692660286722 (tracked)\n\njulia> back!(l)\nloss(x, y)는 방금 전과 같은 수(3.1660692660286722)를 리턴, 그런데 이제부터는 기울어지는 모양을 관찰 기록하여 값을 추적(tracked)  한다. back!을 호출하면 W와 b의 기울기를 계산한다. 기울기가 뭔지 알아냈으니 W를 고쳐가면서 모델을 훈련하자.julia> W.grad\n2×5 Array{Float64,2}:\n 0.949491  1.81066  1.67074  0.480662  0.367352\n 1.49163   2.84449  2.62468  0.755107  0.577101\n\njulia> # 파라미터 업뎃\n       W.data .-= 0.1(W.grad)\n2×5 Array{Float64,2}:\n  0.762798   0.110647   0.0127989  0.890913  0.473484\n -0.0639541  0.693267  -0.0163046  0.385161  0.714602\n\njulia> loss(x, y) # ~ 2.5\n1.1327711929294395 (tracked)예측 실패(loss)가 조금 줄어들었다. x 예측이 목표 타겟 y에 좀 더 가까워졌다는 것을 의미한다. 데이터가 있으면 모델 훈련하기도 시도할 수 있다.복잡한 딥러닝이 Flux에서는 이와 같은 예제처럼 단순해진다. 물론 모델의 파라미터 갯수가 백만개가 넘어가고 복잡한 제어 흐름을 갖게 되면 다른 모양을 갖겠지. 그리고 이러한 복잡성을 다루는 것에는 뭐가 있는지 한번 살펴보자."
},

{
    "location": "Flux/models/basics/#레이어-만들기-1",
    "page": "기본적인 것",
    "title": "레이어 만들기",
    "category": "section",
    "text": "이제부터는 linear regression 보다 복잡한 모델을 만들어 보자. 예를 들어, 두 개의 linear 레이어 사이에 시그모이드 (σ) 처럼 nonlinearity(비선형, 커브처럼 직선이 아닌 거)를 갖는 넘이 있을때, 위의 스타일은 아래와 같이 쓸 수 있다:julia> using Flux\n\njulia> W1 = param(rand(3, 5))\nTracked 3×5 Array{Float64,2}:\n 0.540422  0.680087  0.743124  0.0216563  0.377793\n 0.416939  0.51823   0.464998  0.419852   0.446143\n 0.260294  0.392582  0.46784   0.549495   0.373124\n\njulia> b1 = param(rand(3))\nTracked 3-element Array{Float64,1}:\n 0.213799\n 0.373862\n 0.243417\n\njulia> layer1(x) = W1 * x .+ b1\nlayer1 (generic function with 1 method)\n\njulia> W2 = param(rand(2, 3))\nTracked 2×3 Array{Float64,2}:\n 0.789744  0.389376  0.172613\n 0.472963  0.21518   0.220236\n\njulia> b2 = param(rand(2))\nTracked 2-element Array{Float64,1}:\n 0.121207\n 0.502486\n\njulia> layer2(x) = W2 * x .+ b2\nlayer2 (generic function with 1 method)\n\njulia> model(x) = layer2(σ.(layer1(x)))\nmodel (generic function with 1 method)\n\njulia> model(rand(5)) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 1.06727\n 1.13835작동은 하는데 중복 작업이 많아 보기에 좋지 않다 - 특히 레이어를 더 추가한다면. linear 레이어를 돌려주는 함수를 하나 만들어 이것들을 정리하자.julia> function linear(in, out)\n         W = param(randn(out, in))\n         b = param(randn(out))\n         x -> W * x .+ b\n       end\nlinear (generic function with 1 method)\n\njulia> linear1 = linear(5, 3) # linear1.W 할 수 있닥 (익명함수 리턴)\n(::#3) (generic function with 1 method)\n\njulia> linear1.W\nTracked 3×5 Array{Float64,2}:\n -1.72011   -1.07297   0.396755  -0.117604   0.25952\n -0.16694    0.99327  -0.589717  -1.87123    0.141679\n -0.972281  -1.84836   2.55071   -0.136674  -0.147826\n\njulia> linear2 = linear(3, 2)\n(::#3) (generic function with 1 method)\n\njulia> model(x) = linear2(σ.(linear1(x)))\nmodel (generic function with 1 method)\n\njulia> model(x) # => 2-엘러먼트 벡터\nTracked 2-element Array{Float64,1}:\n 2.75582\n 0.416809다른 방법으로는 struct로 타입을 만들어서 affine(어파인) 레이어를 명시적으로 표현하는 것이 있다.julia> struct Affine\n         W\n         b\n       end\n\njulia> Affine(in::Integer, out::Integer) =\n         Affine(param(randn(out, in)), param(randn(out)))\nAffine\n\njulia> # 오버로드 하면 객체를 함수처럼 호출할 수 있다\n       (m::Affine)(x) = m.W * x .+ m.b\n\njulia> a = Affine(10, 5)\nAffine(param([0.0252182 -1.99122 … -0.191235 0.294728; 1.13559 1.50226 … -2.43917 0.56976; … ; -0.735177 0.202646 … -0.301945 -0.183598; 1.05967 0.986786 … -1.57835 -0.0893871]), param([-0.39419, -1.26818, 0.757665, 0.941398, -0.783242]))\n\njulia> a(rand(10)) # => 5-엘러먼트 벡터\nTracked 5-element Array{Float64,1}:\n -0.945544\n -0.575674\n  2.93741\n  0.111253\n -0.843172축하합니다! Flux에서 나오는 Dense 레이어 만들기 성공! Flux는 많은 재밌는 레이어들이 있는데, 그것들을 직접 만드는 것 또한 정말 쉽다.(Dense와 다른 한가지 - 편의를 위해 activation(활성) 함수를 뒤에 추가할 수도 있다. Dense(10, 5, σ) 요런식으로.)"
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
    "location": "Flux/models/recurrence/#기울기-잘라내기-1",
    "page": "순환(Recurrence)",
    "title": "기울기 잘라내기",
    "category": "section",
    "text": "기본적으로, 순환 레이어의 기울기를 계산하는 것은 전체 기록(history)을 내포한다. 예를 들어 100개의 입력을 가진 모델을 실행할 때, back!을 하면 100개에 대한 기울기를 계산한다. 그러고 다른 10개의 입력을 더 계산한다면 110개의 기울기를 계산해야 한다 - 이거는 누적되므로 빠르게 연산 비용이 증가한다.이거를 막는 방법은 기울기 계산을 잘라내어(truncate) 기록을 지워주는 것이다.julia> Flux.truncate!(m)\ntruncate!을 호출하면 깔끔이 청소해 준다. 그래서 더 많은 입력의 모델을 실행해도 비싼 기울기 연산 없이 해낼 수 있다.truncate!는 여러 개의 커다란 시퀀스 덩어리를 다룰 때 유용하지만, 서로 독립적인 시퀀스들을 다루고 싶을 때도 있다. 그 경우 히든 상태는 원래 값으로 완전히 초기화 되어 누적된 정보를 버린다. 그렇게 하고 싶으면 reset!을 해 주자.julia> Flux.reset!(m)\n"
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
    "text": "이번에는 모델 파라미터를 정규화 해 보자. norm과 같은 정규화를 해주는 적절한 함수를 각 모델 파라미터에 적용하여 그 결과를 모든 loss에 더하도록 하자.예를 들어, 다음과 같은 간단한 regression을 보자.julia> using Flux\n\njulia> m = Dense(10, 5)\nDense(10, 5)\n\njulia> loss(x, y) = Flux.crossentropy(softmax(m(x)), y)\nloss (generic function with 1 method)m.W와 m.b 파라미터에 L2 norm을 취하여 정규화 해보자.julia> penalty() = norm(m.W) + norm(m.b)\npenalty (generic function with 1 method)\n\njulia> loss(x, y) = Flux.crossentropy(softmax(m(x)), y) + penalty()\nloss (generic function with 1 method)레이어를 이용하는 경우, Flux는 params 함수를 제공하여 모든 파라미터를 한번에 가져올 수 있다. sum(norm, params)를 사용하여 전체를 쉽게 적용할 수 있다.julia> params(m)\n2-element Array{Any,1}:\n param([-0.61839 -0.556047 … -0.460808 -0.107646; 0.346293 -0.375076 … -0.608704 -0.181025; … ; -0.2226 -0.0992159 … 0.0707984 -0.429173; -0.331058 -0.291995 … 0.383368 0.156716])\n param([0.0, 0.0, 0.0, 0.0, 0.0])\n\njulia> sum(norm, params(m))\n2.4130860599427706 (tracked)좀 더 큰 규모의 예로, 멀티-레이어 퍼셉트론(perceptron)은 다음과 같다.julia> m = Chain(\n         Dense(28^2, 128, relu),\n         Dense(128, 32, relu),\n         Dense(32, 10), softmax)\nChain(Dense(784, 128, NNlib.relu), Dense(128, 32, NNlib.relu), Dense(32, 10), NNlib.softmax)\n\njulia> loss(x, y) = Flux.crossentropy(m(x), y) + sum(norm, params(m))\nloss (generic function with 1 method)\n\njulia> loss(rand(28^2), rand(10))\n39.128892409412174 (tracked)"
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
    "text": "이 레이어들은 네트워크의 구조에는 영향을 주지 않으면서 훈련 시간(training times)의 개선 그리고 overfitting(오버피팅, 과적합)을 줄여 준다.Flux.testmode!\nBatchNorm\nDropout\nLayerNorm"
},

{
    "location": "Flux/training/optimisers/#",
    "page": "Optimisers",
    "title": "Optimisers",
    "category": "page",
    "text": "다음 똥 타임"
},

{
    "location": "Flux/training/optimisers/#Optimisers-1",
    "page": "Optimisers",
    "title": "Optimisers",
    "category": "section",
    "text": "Consider a simple linear regression. We create some dummy data, calculate a loss, and backpropagate to calculate gradients for the parameters W and b.W = param(rand(2, 5))\nb = param(rand(2))\n\npredict(x) = W*x .+ b\nloss(x, y) = sum((predict(x) .- y).^2)\n\nx, y = rand(5), rand(2) # Dummy data\nl = loss(x, y) # ~ 3\nback!(l)We want to update each parameter, using the gradient, in order to improve (reduce) the loss. Here's one way to do that:function update()\n  η = 0.1 # Learning Rate\n  for p in (W, b)\n    p.data .-= η .* p.grad # Apply the update\n    p.grad .= 0            # Clear the gradient\n  end\nendIf we call update, the parameters W and b will change and our loss should go down.There are two pieces here: one is that we need a list of trainable parameters for the model ([W, b] in this case), and the other is the update step. In this case the update is simply gradient descent (x .-= η .* Δ), but we might choose to do something more advanced, like adding momentum.In this case, getting the variables is trivial, but you can imagine it'd be more of a pain with some complex stack of layers.m = Chain(\n  Dense(10, 5, σ),\n  Dense(5, 2), softmax)Instead of having to write [m[1].W, m[1].b, ...], Flux provides a params function params(m) that returns a list of all parameters in the model for you.For the update step, there's nothing whatsoever wrong with writing the loop above – it'll work just fine – but Flux provides various optimisers that make it more convenient.opt = SGD([W, b], 0.1) # Gradient descent with learning rate 0.1\n\nopt() # Carry out the update, modifying `W` and `b`.An optimiser takes a parameter list and returns a function that does the same thing as update above. We can pass either opt or update to our training loop, which will then run the optimiser after every mini-batch of data."
},

{
    "location": "Flux/training/optimisers/#Optimiser-Reference-1",
    "page": "Optimisers",
    "title": "Optimiser Reference",
    "category": "section",
    "text": "All optimisers return a function that, when called, will update the parameters passed to it.SGD\nMomentum\nNesterov\nADAM"
},

{
    "location": "Flux/training/training/#",
    "page": "Training",
    "title": "Training",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/training/training/#Training-1",
    "page": "Training",
    "title": "Training",
    "category": "section",
    "text": "To actually train a model we need three things:A objective function, that evaluates how well a model is doing given some input data.\nA collection of data points that will be provided to the objective function.\nAn optimiser that will update the model parameters appropriately.With these we can call Flux.train!:Flux.train!(objective, data, opt)There are plenty of examples in the model zoo."
},

{
    "location": "Flux/training/training/#Loss-Functions-1",
    "page": "Training",
    "title": "Loss Functions",
    "category": "section",
    "text": "The objective function must return a number representing how far the model is from its target – the loss of the model. The loss function that we defined in basics will work as an objective. We can also define an objective in terms of some model:m = Chain(\n  Dense(784, 32, σ),\n  Dense(32, 10), softmax)\n\nloss(x, y) = Flux.mse(m(x), y)\n\n# later\nFlux.train!(loss, data, opt)The objective will almost always be defined in terms of some cost function that measures the distance of the prediction m(x) from the target y. Flux has several of these built in, like mse for mean squared error or crossentropy for cross entropy loss, but you can calculate it however you want."
},

{
    "location": "Flux/training/training/#Datasets-1",
    "page": "Training",
    "title": "Datasets",
    "category": "section",
    "text": "The data argument provides a collection of data to train with (usually a set of inputs x and target outputs y). For example, here's a dummy data set with only one data point:x = rand(784)\ny = rand(10)\ndata = [(x, y)]Flux.train! will call loss(x, y), calculate gradients, update the weights and then move on to the next data point if there is one. We can train the model on the same data three times:data = [(x, y), (x, y), (x, y)]\n# Or equivalently\ndata = Iterators.repeated((x, y), 3)It's common to load the xs and ys separately. In this case you can use zip:xs = [rand(784), rand(784), rand(784)]\nys = [rand( 10), rand( 10), rand( 10)]\ndata = zip(xs, ys)Note that, by default, train! only loops over the data once (a single \"epoch\"). A convenient way to run multiple epochs from the REPL is provided by @epochs.julia> using Flux: @epochs\n\njulia> @epochs 2 println(\"hello\")\nINFO: Epoch 1\nhello\nINFO: Epoch 2\nhello\n\njulia> @epochs 2 Flux.train!(...)\n# Train for two epochs"
},

{
    "location": "Flux/training/training/#Callbacks-1",
    "page": "Training",
    "title": "Callbacks",
    "category": "section",
    "text": "train! takes an additional argument, cb, that's used for callbacks so that you can observe the training process. For example:train!(objective, data, opt, cb = () -> println(\"training\"))Callbacks are called for every batch of training data. You can slow this down using Flux.throttle(f, timeout) which prevents f from being called more than once every timeout seconds.A more typical callback might look like this:test_x, test_y = # ... create single batch of test data ...\nevalcb() = @show(loss(test_x, test_y))\n\nFlux.train!(objective, data, opt,\n            cb = throttle(evalcb, 5))"
},

{
    "location": "Flux/data/onehot/#",
    "page": "One-Hot Encoding",
    "title": "One-Hot Encoding",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/data/onehot/#One-Hot-Encoding-1",
    "page": "One-Hot Encoding",
    "title": "One-Hot Encoding",
    "category": "section",
    "text": "It's common to encode categorical variables (like true, false or cat, dog) in \"one-of-k\" or \"one-hot\" form. Flux provides the onehot function to make this easy.julia> using Flux: onehot\n\njulia> onehot(:b, [:a, :b, :c])\n3-element Flux.OneHotVector:\n false\n  true\n false\n\njulia> onehot(:c, [:a, :b, :c])\n3-element Flux.OneHotVector:\n false\n false\n  trueThe inverse is argmax (which can take a general probability distribution, as well as just booleans).julia> argmax(ans, [:a, :b, :c])\n:c\n\njulia> argmax([true, false, false], [:a, :b, :c])\n:a\n\njulia> argmax([0.3, 0.2, 0.5], [:a, :b, :c])\n:c"
},

{
    "location": "Flux/data/onehot/#Batches-1",
    "page": "One-Hot Encoding",
    "title": "Batches",
    "category": "section",
    "text": "onehotbatch creates a batch (matrix) of one-hot vectors, and argmax treats matrices as batches.julia> using Flux: onehotbatch\n\njulia> onehotbatch([:b, :a, :b], [:a, :b, :c])\n3×3 Flux.OneHotMatrix:\n false   true  false\n  true  false   true\n false  false  false\n\njulia> onecold(ans, [:a, :b, :c])\n3-element Array{Symbol,1}:\n  :b\n  :a\n  :bNote that these operations returned OneHotVector and OneHotMatrix rather than Arrays. OneHotVectors behave like normal vectors but avoid any unnecessary cost compared to using an integer index directly. For example, multiplying a matrix with a one-hot vector simply slices out the relevant row of the matrix under the hood."
},

{
    "location": "Flux/gpu/#",
    "page": "GPU Support",
    "title": "GPU Support",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/gpu/#GPU-Support-1",
    "page": "GPU Support",
    "title": "GPU Support",
    "category": "section",
    "text": "Support for array operations on other hardware backends, like GPUs, is provided by external packages like CuArrays and CLArrays. Flux doesn't care what array type you use, so we can just plug these in without any other changes.For example, we can use CuArrays (with the cu converter) to run our basic example on an NVIDIA GPU.using CuArrays\n\nW = cu(rand(2, 5)) # a 2×5 CuArray\nb = cu(rand(2))\n\npredict(x) = W*x .+ b\nloss(x, y) = sum((predict(x) .- y).^2)\n\nx, y = cu(rand(5)), cu(rand(2)) # Dummy data\nloss(x, y) # ~ 3Note that we convert both the parameters (W, b) and the data set (x, y) to cuda arrays. Taking derivatives and training works exactly as before.If you define a structured model, like a Dense layer or Chain, you just need to convert the internal parameters. Flux provides mapleaves, which allows you to alter all parameters of a model at once.d = Dense(10, 5, σ)\nd = mapleaves(cu, d)\nd.W # Tracked CuArray\nd(cu(rand(10))) # CuArray output\n\nm = Chain(Dense(10, 5, σ), Dense(5, 2), softmax)\nm = mapleaves(cu, m)\nd(cu(rand(10)))The mnist example contains the code needed to run the model on the GPU; just uncomment the lines after using CuArrays."
},

{
    "location": "Flux/community/#",
    "page": "Community",
    "title": "Community",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/community/#Community-1",
    "page": "Community",
    "title": "Community",
    "category": "section",
    "text": "All Flux users are welcome to join our community on the Julia forum, the slack (channel #machine-learning), or Flux's Gitter. If you have questions or issues we'll try to help you out.If you're interested in hacking on Flux, the source code is open and easy to understand – it's all just the same Julia code you work with normally. You might be interested in our intro issues to get started."
},

]}
