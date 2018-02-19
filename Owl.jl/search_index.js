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
    "text": ""
},

{
    "location": "Flux/#Flux:-줄리아-머신-러닝-라이브러리-1",
    "page": "Flux 홈",
    "title": "Flux: 줄리아 머신 러닝 라이브러리",
    "category": "section",
    "text": "Flux는 머신러닝을 위한 라이브러리. \"배터리-포함(batteries-included, 제품의 완전한 유용성을 위해 필요한 모든 부품을 함께 제공한다는 소프트웨어쪽 용어)\" 많은 유용한 도구를 제공. 줄리아 언어를 풀파워(full power)로 사용할 수 있다. 전체 스택을 줄리아 코드로 구현함. GPU 커널도 가능하고, 개별 파트를 개인 취향에 맞게 조작할 수 있다."
},

{
    "location": "Flux/#설치-1",
    "page": "Flux 홈",
    "title": "설치",
    "category": "section",
    "text": "줄리아 0.6.0 이상을 아직 안깔았으면 설치.Pkg.add(\"Flux\")\n# 선택인데 추천\nPkg.update() # 패키지를 최신 버전으로 업뎃\nPkg.test(\"Flux\") # 설치 똑바로 된건가 확인해 봄기본적인 것 부터 시작하자. 동물원 모델(model zoo)은 여러가지 공통 모델을 다루는데 그걸로 시작해도 좋다."
},

{
    "location": "Flux/models/basics/#",
    "page": "기본적인 것",
    "title": "기본적인 것",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/basics/#모델-빌딩-기초-1",
    "page": "기본적인 것",
    "title": "모델-빌딩 기초",
    "category": "section",
    "text": ""
},

{
    "location": "Flux/models/basics/#기울기(Gradients,-경사)-구하기-1",
    "page": "기본적인 것",
    "title": "기울기(Gradients, 경사) 구하기",
    "category": "section",
    "text": "간단한 linear regression(선 모양으로 그려지는)을 생각해보자. 입력 x에 대해 출력 배열 y 가 어떤 모양으로 나올지 예측하는 것이다. (줄리아 REPL에서 예제를 따라해보면 좋다)W = rand(2, 5)\nb = rand(2)\n\npredict(x) = W*x .+ b\nloss(x, y) = sum((predict(x) .- y).^2)\n\nx, y = rand(5), rand(2) # 더미 데이터\nloss(x, y) # ~ 3예측을 더 잘하기 위해 W와 b의 기울기를 구하자. loss function과 gradient descent를 해보면서. 직접 손으로 기울기를 계산할 수 있지만 Flux에서는 W와 b를 훈련시키는 파라미터(parameters)로 둘 수 있다.using Flux.Tracker\n\nW = param(W)\nb = param(b)\n\nl = loss(x, y)\n\nback!(l)loss(x, y)는 같은 수를 리턴, 그런데 이제부터는 기울어지는 모양을 관찰 기록하여 값을 추적(tracked) 한다. back!을 호출하면 W와 b의 기울기를 계산한다. 기울기가 뭔지 알아냈고 W를 고쳐가면서 모델을 훈련한다.W.grad\n\n# 파라미터 업뎃\nW.data .-= 0.1(W.grad)\n\nloss(x, y) # ~ 2.5loss가 조금 줄어들었다, 예측 x가 타겟 y에 좀 더 가까워졌다는 것을 의미한다. 데이터가 있으면 모델 훈련하기도 시도할 수 있다.복잡한 딥러닝이 Flux에서는 이와 같은 예제처럼 단순해진다. 물론 모델의 파라미터 갯수가 백만개가 넘어가고 복잡한 제어 흐름을 갖게 되면 다른 모양을 갖겠지. 그리고 이러한 복잡성을 다루는 법이 있다. 어떤 것인지 살펴보자."
},

{
    "location": "Flux/models/basics/#Building-Layers-1",
    "page": "기본적인 것",
    "title": "Building Layers",
    "category": "section",
    "text": "It's common to create more complex models than the linear regression above. For example, we might want to have two linear layers with a nonlinearity like sigmoid (σ) in between them. In the above style we could write this as:W1 = param(rand(3, 5))\nb1 = param(rand(3))\nlayer1(x) = W1 * x .+ b1\n\nW2 = param(rand(2, 3))\nb2 = param(rand(2))\nlayer2(x) = W2 * x .+ b2\n\nmodel(x) = layer2(σ.(layer1(x)))\n\nmodel(rand(5)) # => 2-element vectorThis works but is fairly unwieldy, with a lot of repetition – especially as we add more layers. One way to factor this out is to create a function that returns linear layers.function linear(in, out)\n  W = param(randn(out, in))\n  b = param(randn(out))\n  x -> W * x .+ b\nend\n\nlinear1 = linear(5, 3) # we can access linear1.W etc\nlinear2 = linear(3, 2)\n\nmodel(x) = linear2(σ.(linear1(x)))\n\nmodel(x) # => 2-element vectorAnother (equivalent) way is to create a struct that explicitly represents the affine layer.struct Affine\n  W\n  b\nend\n\nAffine(in::Integer, out::Integer) =\n  Affine(param(randn(out, in)), param(randn(out)))\n\n# Overload call, so the object can be used as a function\n(m::Affine)(x) = m.W * x .+ m.b\n\na = Affine(10, 5)\n\na(rand(10)) # => 5-element vectorCongratulations! You just built the Dense layer that comes with Flux. Flux has many interesting layers available, but they're all things you could have built yourself very easily.(There is one small difference with Dense – for convenience it also takes an activation function, like Dense(10, 5, σ).)"
},

{
    "location": "Flux/models/basics/#Stacking-It-Up-1",
    "page": "기본적인 것",
    "title": "Stacking It Up",
    "category": "section",
    "text": "It's pretty common to write models that look something like:layer1 = Dense(10, 5, σ)\n# ...\nmodel(x) = layer3(layer2(layer1(x)))For long chains, it might be a bit more intuitive to have a list of layers, like this:using Flux\n\nlayers = [Dense(10, 5, σ), Dense(5, 2), softmax]\n\nmodel(x) = foldl((x, m) -> m(x), x, layers)\n\nmodel(rand(10)) # => 2-element vectorHandily, this is also provided for in Flux:model2 = Chain(\n  Dense(10, 5, σ),\n  Dense(5, 2),\n  softmax)\n\nmodel2(rand(10)) # => 2-element vectorThis quickly starts to look like a high-level deep learning library; yet you can see how it falls out of simple abstractions, and we lose none of the power of Julia code.A nice property of this approach is that because \"models\" are just functions (possibly with trainable parameters), you can also see this as simple function composition.m = Dense(5, 2) ∘ Dense(10, 5, σ)\n\nm(rand(10))Likewise, Chain will happily work with any Julia function.m = Chain(x -> x^2, x -> x+1)\n\nm(5) # => 26"
},

{
    "location": "Flux/models/basics/#Layer-helpers-1",
    "page": "기본적인 것",
    "title": "Layer helpers",
    "category": "section",
    "text": "Flux provides a set of helpers for custom layers, which you can enable by callingFlux.treelike(Affine)This enables a useful extra set of functionality for our Affine layer, such as collecting its parameters or moving it to the GPU."
},

{
    "location": "Flux/models/recurrence/#",
    "page": "Recurrence",
    "title": "Recurrence",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/recurrence/#Recurrent-Models-1",
    "page": "Recurrence",
    "title": "Recurrent Models",
    "category": "section",
    "text": ""
},

{
    "location": "Flux/models/recurrence/#Recurrent-Cells-1",
    "page": "Recurrence",
    "title": "Recurrent Cells",
    "category": "section",
    "text": "In the simple feedforward case, our model m is a simple function from various inputs xᵢ to predictions yᵢ. (For example, each x might be an MNIST digit and each y a digit label.) Each prediction is completely independent of any others, and using the same x will always produce the same y.y₁ = f(x₁)\ny₂ = f(x₂)\ny₃ = f(x₃)\n# ...Recurrent networks introduce a hidden state that gets carried over each time we run the model. The model now takes the old h as an input, and produces a new h as output, each time we run it.h = # ... initial state ...\nh, y₁ = f(h, x₁)\nh, y₂ = f(h, x₂)\nh, y₃ = f(h, x₃)\n# ...Information stored in h is preserved for the next prediction, allowing it to function as a kind of memory. This also means that the prediction made for a given x depends on all the inputs previously fed into the model.(This might be important if, for example, each x represents one word of a sentence; the model's interpretation of the word \"bank\" should change if the previous input was \"river\" rather than \"investment\".)Flux's RNN support closely follows this mathematical perspective. The most basic RNN is as close as possible to a standard Dense layer, and the output is also the hidden state.Wxh = randn(5, 10)\nWhh = randn(5, 5)\nb   = randn(5)\n\nfunction rnn(h, x)\n  h = tanh.(Wxh * x .+ Whh * h .+ b)\n  return h, h\nend\n\nx = rand(10) # dummy data\nh = rand(5)  # initial hidden state\n\nh, y = rnn(h, x)If you run the last line a few times, you'll notice the output y changing slightly even though the input x is the same.We sometimes refer to functions like rnn above, which explicitly manage state, as recurrent cells. There are various recurrent cells available, which are documented in the layer reference. The hand-written example above can be replaced with:using Flux\n\nrnn2 = Flux.RNNCell(10, 5)\n\nx = rand(10) # dummy data\nh = rand(5)  # initial hidden state\n\nh, y = rnn2(h, x)"
},

{
    "location": "Flux/models/recurrence/#Stateful-Models-1",
    "page": "Recurrence",
    "title": "Stateful Models",
    "category": "section",
    "text": "For the most part, we don't want to manage hidden states ourselves, but to treat our models as being stateful. Flux provides the Recur wrapper to do this.x = rand(10)\nh = rand(5)\n\nm = Flux.Recur(rnn, h)\n\ny = m(x)The Recur wrapper stores the state between runs in the m.state field.If you use the RNN(10, 5) constructor – as opposed to RNNCell – you'll see that it's simply a wrapped cell.julia> RNN(10, 5)\nRecur(RNNCell(Dense(15, 5)))"
},

{
    "location": "Flux/models/recurrence/#Sequences-1",
    "page": "Recurrence",
    "title": "Sequences",
    "category": "section",
    "text": "Often we want to work with sequences of inputs, rather than individual xs.seq = [rand(10) for i = 1:10]With Recur, applying our model to each element of a sequence is trivial:m.(seq) # returns a list of 5-element vectorsThis works even when we've chain recurrent layers into a larger model.m = Chain(LSTM(10, 15), Dense(15, 5))\nm.(seq)"
},

{
    "location": "Flux/models/recurrence/#Truncating-Gradients-1",
    "page": "Recurrence",
    "title": "Truncating Gradients",
    "category": "section",
    "text": "By default, calculating the gradients in a recurrent layer involves the entire history. For example, if we call the model on 100 inputs, calling back! will calculate the gradient for those 100 calls. If we then calculate another 10 inputs we have to calculate 110 gradients – this accumulates and quickly becomes expensive.To avoid this we can truncate the gradient calculation, forgetting the history.truncate!(m)Calling truncate! wipes the slate clean, so we can call the model with more inputs without building up an expensive gradient computation.truncate! makes sense when you are working with multiple chunks of a large sequence, but we may also want to work with a set of independent sequences. In this case the hidden state should be completely reset to its original value, throwing away any accumulated information. reset! does this for you."
},

{
    "location": "Flux/models/regularisation/#",
    "page": "Regularisation",
    "title": "Regularisation",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/regularisation/#Regularisation-1",
    "page": "Regularisation",
    "title": "Regularisation",
    "category": "section",
    "text": "Applying regularisation to model parameters is straightforward. We just need to apply an appropriate regulariser, such as norm, to each model parameter and add the result to the overall loss.For example, say we have a simple regression.m = Dense(10, 5)\nloss(x, y) = crossentropy(softmax(m(x)), y)We can regularise this by taking the (L2) norm of the parameters, m.W and m.b.penalty() = norm(m.W) + norm(m.b)\nloss(x, y) = crossentropy(softmax(m(x)), y) + penalty()When working with layers, Flux provides the params function to grab all parameters at once. We can easily penalise everything with sum(norm, params).julia> params(m)\n2-element Array{Any,1}:\n param([0.355408 0.533092; … 0.430459 0.171498])\n param([0.0, 0.0, 0.0, 0.0, 0.0])\n\njulia> sum(norm, params(m))\n26.01749952921026 (tracked)Here's a larger example with a multi-layer perceptron.m = Chain(\n  Dense(28^2, 128, relu),\n  Dense(128, 32, relu),\n  Dense(32, 10), softmax)\n\nloss(x, y) = crossentropy(m(x), y) + sum(norm, params(m))\n\nloss(rand(28^2), rand(10))"
},

{
    "location": "Flux/models/layers/#",
    "page": "Model Reference",
    "title": "Model Reference",
    "category": "page",
    "text": ""
},

{
    "location": "Flux/models/layers/#Basic-Layers-1",
    "page": "Model Reference",
    "title": "Basic Layers",
    "category": "section",
    "text": "These core layers form the foundation of almost all neural networks.Chain\nDense\nConv2D"
},

{
    "location": "Flux/models/layers/#Recurrent-Layers-1",
    "page": "Model Reference",
    "title": "Recurrent Layers",
    "category": "section",
    "text": "Much like the core layers above, but can be used to process sequence data (as well as other kinds of structured data).RNN\nLSTM\nFlux.Recur"
},

{
    "location": "Flux/models/layers/#Activation-Functions-1",
    "page": "Model Reference",
    "title": "Activation Functions",
    "category": "section",
    "text": "Non-linearities that go between layers of your model. Most of these functions are defined in NNlib but are available by default in Flux.Note that, unless otherwise stated, activation functions operate on scalars. To apply them to an array you can call σ.(xs), relu.(xs) and so on.σ\nrelu\nleakyrelu\nelu\nswish"
},

{
    "location": "Flux/models/layers/#Normalisation-and-Regularisation-1",
    "page": "Model Reference",
    "title": "Normalisation & Regularisation",
    "category": "section",
    "text": "These layers don't affect the structure of the network but may improve training times or reduce overfitting.Flux.testmode!\nBatchNorm\nDropout\nLayerNorm"
},

{
    "location": "Flux/training/optimisers/#",
    "page": "Optimisers",
    "title": "Optimisers",
    "category": "page",
    "text": ""
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
