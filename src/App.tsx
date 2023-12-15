import React from 'react';
import './App.css';
import { FormProvider, useForm } from 'react-hook-form';

function App() {
  const [isMap, setIsMap] = React.useState(false);
  const [questions, setQuestions] = React.useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false });
  const methods = useForm();
  const setMap = () => {
    setIsMap(!isMap);
  };

  const submit = (data: any) => {
    if (data.block1 === '123') {
      setQuestions({ 1: true, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false })
    }
    if (data.block2 === '55555') {
      setQuestions({ 1: true, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false })
    }
    if (data.block3?.toLowerCase() === 'мокрыйнос69') {
      setQuestions({ 1: true, 2: true, 3: true, 4: false, 5: false, 6: false, 7: false, 8: false })
    }
    if (data.block4?.toLowerCase() === 'хвост') {
      setQuestions({ 1: true, 2: true, 3: true, 4: true, 5: false, 6: false, 7: false, 8: false })
    }
    if (data.block5 === '1234567890') {
      setQuestions({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: false, 7: false, 8: false })
    }
    if (data.block6 === 'qweRty') {
      setQuestions({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true , 7: false, 8: false})
    }
    if (data.block7 === '2310') {
      setQuestions({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true , 7: true, 8: false})
    }
    if (data.block8?.toLowerCase() === 'кошка') {
      setQuestions({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true , 7: true, 8: true})
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <FormProvider {...methods}>
          <div className="blockButton">
            <label className="label">операция: "Спасение Санты"</label>
            <button className="button" onClick={setMap}>
              {!isMap ? 'Посмотреть карту корабля' : 'Вернуться обратно'}
            </button>
          </div>
          <form onSubmit={methods.handleSubmit(submit)}>
            {!isMap && (
              <>
                <div className="block">
                  <label className="label">Отлично храбрый эльф, ты попал на корабль инопланетян. Сейчас ты находишься в начальном ангаре.
                    Остальные места на корабле защищены силовыми барьерами, поэтому ты не можешь туда пройти, чтоб их отключать нужно
                    будет вводить пароль для разблокировки помещений. Чтоб пройти дальше, тебе стоит поискать какие-то зацепки...
                    Тут ты можешь увидеть двух самый красивых девушек, за одной из них возможно что-то есть.
                  </label>
                  <input className="input" {...methods.register('block1')} />
                  <button type="submit" className="button">
                    Ввести пароль
                  </button>
                </div>

                {questions['1'] && <div className="block">
                  <label className="label">Блок 2 Кухня</label>
                  <input className="input" {...methods.register('block2')} />
                  <button className="button" type="submit">
                    Ввести пароль
                  </button>
                </div>}

                {questions['2'] && <div className="block">
                  <label className="label">Маленький, славный эльф справился со своим заданием! Открылась новая секция - Библиотека.
                    Далее задание от автора: Нужно составить пароль. Моя первая взрослая книга была - Становление Короля-Лича, но я её прочитал на телефоне,
                    а тебе необходимо найти мою первую взрослую книгу, которую я купил в книжкном (страница 40).
                  </label>
                  <input className="input" {...methods.register('block3')} />
                  <button className="button" type="submit">
                    Ввести пароль
                  </button>
                </div>}

                {questions['3'] && <div className="block">
                  <label className="label">Отлично, успешно разблокировалось всё помещение данной секции. Злых инопланетян до сих пор не видно, как и следов Санты.
                    следующую зацепку стоит искать прямо у них под жопками в видвижном ангаре...)
                  </label>
                  <input className="input" {...methods.register('block4')}  />
                  <button className="button">Ввести пароль</button>
                </div>}

                {questions['4'] && <div className="block">
                  <label className="label">Ура! Ты добрался до бортового компьютера инопланетян. Сейчас ты, храбрый эльф, будешь его взламывать.
                    Открой на рабочем столе папку "Бортовой компьютер" и следуй инструкциям. Удачи!
                  </label>
                  <input className="input" {...methods.register('block5')}  />
                  <button className="button">Ввести пароль</button>
                </div>}

                {questions['5'] && <div className="block">
                  <label className="label">ВИУ-ВИУ-ВИУ! Сработала сигнализация и твою дорогу перегородил страж коробля - Сыроликий Сказилибоб.
                    Это очень мощный инопланетный организм с планеты Калозавров. Он не знает ни любви, ни жалости и даже налоги платит с
                    удовольствием, очень страшный тип. Тебе придётся сразить его, храбрый Эльф. Я просканировал помещение и во стором снизу ящике
                    есть легендарное копьё - Жало Аристарха. Необходимо будет метнуть его Сказалибобу точно в морду с растояния 2ух метров. Ты
                    справишься! Эльфы просто так не сдаются!
                  </label>
                  <input className="input" {...methods.register('block6')}  />
                  <button className="button">Ввести пароль</button>
                </div>}

                {questions['6'] && <div className="block">
                  <label className="label">После того, как ты сразил своего врага могучем броском, ты оказался в складским помещении. Чтоб пройти дальше,
                    спроси Матроскина.</label>
                  <input className="input" {...methods.register('block7')}  />
                  <button className="button">Ввести пароль</button>
                </div>}

                {questions['7'] && <div className="block">
                  <label className="label">Молодец, храбрый эльф, ты почти у цели! Ты взломал бортовой компьютер и просканировал корабль. Следы Санты ведут
                    на капитанский мостик под кодовым названием "Балкон". Тебе следует найти там кошачий домик, в нём есть последние улики виновных в пропаже
                    Санты.
                  </label>
                  <input className="input" {...methods.register('block8')}  />
                  <button className="button">Ввести пароль</button>
                </div>}

                {questions['8'] && <div className="block">
                  <label className="label">Поздравляю тебя с победой, храбрый, маленький эльф. Ты снял последний борьер и теперь можешь идти и освобождать
                    Санту, его можно найти там где шумит вода и время от времени журчит кошка). Приди туда и ты увидешь самую красивую девочку, за её спиной
                    ты найдёшь коробочки, в одной из них Злодей спрятал Санту. Освободи его и прими его презент в честь его спасения)
                  </label>
                  <label>
                    конец =)
                  </label>
                </div>}
              </>
            )}
          </form>
        </FormProvider>

        {isMap && (
          <div className="imgBlock">
            <img src="https://sun9-6.userapi.com/impg/_u5hJX_E5tY-id1TCsYWJm-MzYAtREtakOTGEw/ZQzoW2tlCCo.jpg?size=1200x983&quality=96&sign=df5270f4d6afa924a1c5d9212a2a6bd1&type=album" />
             <div className="sectorStart" />
             <div className="sectorStartOne" />
            {questions['1'] && <div className="sectorZero" />}
            {questions['1'] && <div className="sectorOne" />}
            {questions['2'] && <div className="sectorTwo" />}
            {questions['2'] && <div className="sectorTwoTwo" />}
            {questions['3'] && <div className="sectorThree" />}
            {questions['3'] && <div className="sectorThreeThree" />}
            {questions['4'] && <div className="sectorFour" />}
            {questions['5'] && <div className="sectorFive" />}
            {questions['5'] && <div className="sectorFiveFive" />}
            {questions['6'] && <div className="sectorSix" />}
            {questions['7'] && <div className="sectorSeven" />}
            {questions['7'] && <div className="sectorEight" />}
            {questions['8'] && <div className="sectorNine" />}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
