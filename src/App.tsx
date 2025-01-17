import React from 'react';
import { Moon, Sun, Star, Flower2, Wind, Droplets, Flame, Mountain, Sparkles, Heart, ScrollText, Wand2 } from 'lucide-react';
import logoImage from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-indigo-50 to-emerald-50" >
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Star className="absolute top-10 left-1/4 w-8 h-8" />
          <Moon className="absolute top-20 right-1/3 w-12 h-12" />
          <Sun className="absolute bottom-10 right-1/4 w-10 h-10" />
          <Flower2 className="absolute bottom-20 left-1/3 w-8 h-8" />
          
        </div>
        <img 
            src={logoImage}
            alt="Instituto Revibe" 
            className="w-100 mx-auto mb-0"
            style={{maxWidth: '400px'}}
          />
        <div className="container mx-auto mt-3 px-6 text-center relative z-10">
          
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Cure-se de dentro para fora e descubra a magia de ser você
          </p>
          <a href="https://wa.me/5518996496655" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300 shadow-lg">
            Inicie Sua Jornada de Cura
          </button>
          </a>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Wind className="w-6 h-6 text-blue-500" />
            <Droplets className="w-6 h-6 text-blue-400" />
            <Flame className="w-6 h-6 text-indigo-500" />
            <Mountain className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-800 mb-8">Terapias Holísticas</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            As terapias holísticas são caminhos de cura que vão além do corpo físico: elas cuidam da sua mente, emoções e energia, integrando tudo o que você é. Em um mundo tão acelerado, essas práticas nos convidam a desacelerar, olhar para dentro e nos reconectar com o que realmente importa.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Elas ajudam a expandir a consciência, revelando padrões que limitam seu bem-estar e trazendo clareza para transformar sua realidade interna e externa. Ao equilibrar suas energias, você cria espaço para uma vida mais leve, harmoniosa e alinhada com seu propósito.
          </p>
        </div>
      </section>

      {/* Sagrado Feminino & Ginecologia Natural */}
      <section className="py-20 bg-gradient-to-r from-lavender-50 to-lavender-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Heart className="w-12 h-12 text-lavender-600" />
            </div>
            <h2 className="text-3xl font-bold text-center text-lavender-800 mb-8">
              Sagrado Feminino e Ginecologia Natural
            </h2>
            <p className="text-lavender-900 text-lg mb-8 leading-relaxed">
              Você já parou para sentir a sabedoria que seu corpo carrega? O Sagrado Feminino e a Ginecologia Natural são convites para despertar a conexão profunda com a sua essência, honrando seus ciclos, emoções e o poder que habita em você.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-lavender-700 mb-4">Imagine-se...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Reconectando-se com sua essência, acolhendo sua intuição, criatividade e ciclicidade natural</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Liberando traumas e dores emocionais, de gerações anteriores, resgatando sua força e autonomia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Acolhendo suas emoções, encontrando equilíbrio mesmo nos momentos desafiadores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Amando e aceitando seu corpo, sua história e suas emoções, valorizando sua beleza e valor únicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Identificando e liberando crenças e padrões que limitam seu crescimento emocional e espiritual</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Confiando na sua intuição como guia emocional, ajudando a tomar decisões mais alinhadas com seu coração e verdade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <span className="text-lavender-900">Resgatando seu poder pessoal, ajudando a lidar com emoções intensas de forma consciente e a viver plenamente sua verdade</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <a href="https://wa.me/5518991669184" target="_blank" rel="noopener noreferrer">
                <button className="bg-lavender-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-lavender-700 transition duration-300 shadow-lg">
                  Honre Sua Essência ✨
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reiki Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Wand2 className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Reiki</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              O Reiki é uma terapia energética que vai além do toque: ele atua diretamente no seu campo energético, equilibrando as vibrações que influenciam sua mente, emoções e corpo. Ao liberar bloqueios e restaurar o fluxo natural de energia, o Reiki proporciona uma sensação profunda de paz, leveza e bem-estar.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Muitas vezes, traumas ou mágoas do passado ficam presos no campo energético. O Reiki ajuda a dissolver essas memórias energéticas, trazendo a sensação de que é possível seguir em frente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Seja uma separação, mudança de carreira ou qualquer outra fase desafiadora, o Reiki pode oferecer suporte emocional, trazendo clareza e confiança para enfrentar novos caminhos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Ao equilibrar as energias e fortalecer sua conexão consigo mesmo, o Reiki pode ajudá-lo a se sentir mais seguro e confiante nas suas escolhas e na expressão do seu verdadeiro eu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Com emoções mais equilibradas, você tende a se relacionar melhor com os outros. O Reiki ajuda a curar padrões de comportamento que podem prejudicar suas conexões interpessoais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">O Reiki atua como uma prática meditativa, guiando você para dentro de si mesmo. Essa conexão promove um estado de paz interior, onde as respostas que você procura podem ser encontradas.</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <a href="https://wa.me/5518991426251" target="_blank" rel="noopener noreferrer">
                <button className="bg-lavender-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-lavender-700 transition duration-300 shadow-lg">
                  Permita-se sentir essa transformação
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tarot Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <ScrollText className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">Tarot</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              O Tarot esta muito além de ser apenas cartas com significados — é uma poderosa ferramenta de autoconhecimento, cura e transformação. Ele ilumina caminhos, trazendo esclareza para momentos de dúvida, revelando padrões que limitam sua vida e oferecendo insights para escolhas mais conscientes.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">O Tarot pode oferecer orientações quando você se sente confuso ou perdido. Ele traz uma nova perspectiva sobre os desafios emocionais, ajudando você a enxergar caminhos possíveis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Muitas vezes, carregamos emoções ou padrões inconscientes que nos impedem de avançar. O Tarot revela essas questões ocultas, permitindo que você as enfrente e as libere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Quando você precisa tomar decisões emocionais, como encerrar ou aprofundar relacionamentos, o Tarot pode ajudar a refletir sobre seus sentimentos e intuições para agir com mais segurança.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Se você percebe que vive as mesmas situações emocionais repetidamente, o Tarot pode ajudar a entender as causas desses ciclos e como superá-los</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">O Tarot funciona como um espelho da alma, mostrando aspectos de si mesmo que você pode não estar enxergando. Isso promove um mergulho interno que fortalece seu autoconhecimento e equilíbrio emocional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Com o auxílio do Tarot, é possível trazer à tona feridas emocionais que precisam de atenção e cuidado. Ele guia o processo de cura ao iluminar as raízes das dores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">O Tarot ajuda a trazer à luz os medos que estão bloqueando você, permitindo enfrentá-los de forma mais amorosa e consciente.</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <a href="https://wa.me/5518996496655" target="_blank" rel="noopener noreferrer">
                <button className="bg-lavender-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-lavender-700 transition duration-300 shadow-lg">
                  Descubra sua mensagem
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Moon className="w-6 h-6" />
            <Star className="w-6 h-6" />
            <Sun className="w-6 h-6" />
          </div>
          <p className="text-indigo-200">Instituto Revibe - Transformando Vidas Através da Cura Holística 
          © 2024 Instituto Revibe</p>
        </div>
      </footer>
    </div>
  );
}

export default App;