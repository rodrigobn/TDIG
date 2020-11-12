/**
 *3) Anderson é um aluno muito esforçado e estudioso. Ele se envolve em várias
atividades da universidade. O final do ano está chegando, e com ele, o mês
(dezembro) da apresentação de seu TCC. Ele, cheio de atividades, precisa saber se
será possível apresentar seu tcc antes do Natal! Mas, antes da realização de sua
apresentação, seu trabalho precisa ser revisado por seu orientador russo, o Prof.
Florovsky.

Entrada:
A entrada é composta por um valor E (0 < E < 25) que representa o dia no qual foi
entregue o tcc para revisão. Um valor D (0 < D < 25) representando a data final que
o documento de TCC deve ser entregue para revisão.

Saída:
Mostre, para cada caso de teste, se Anderson apresentará ou não o tcc. A única
possibilidade da entrega não ser realizada na data é por falta de orientação de Florovsky. 
Caso não seja possível, imprima "Eu odeio o prof. Florovsky!". 
Caso o trabalho seja entregue em até 3 dias antes do prazo final, imprima "Muito bem! O
aluno está apto a apresentar até o natal!". 
Caso contrário, sendo muito próximo da data limite imprima "O trabalho está muito ruim!". 
Nesse último caso, serão adicionados mais dois dias para a realização das correções e, 
se a data final for menor que a data 24 (véspera do natal), ele poderá apresentar, 
sendo impresso "TCC Apresentado!", caso contrário imprima "Não deu! Só no próximo ano agora."

 */

function apresentar(diaEntrega, diaFinal) {
    if (diaEntrega <= 0 || diaEntrega >= 25) {
        console.log('Data invalida! Dias aceitos entre 1 e 25 ')
        return
    }
    if (diaFinal <= 0 || diaFinal >= 25) {
        console.log('Data invalida! Dias aceitos entre 1 e 25 ')
        return
    }
    if (diaFinal - diaEntrega >= 3) {        
        console.log('Muito bem! O aluno está apto a apresentar até o natal!')
        return
    }
    if (diaFinal - diaEntrega < 3) {
        console.log('O trabalho está muito ruim!')
        diaFinal += 2
        setTimeout(() => {
            console.log('...')
            if (diaFinal <= 24) {
                console.log('TCC Apresentado!')
            } else {
                console.log('Não deu! Só no próximo ano agora.')
                console.log('Eu odeio o prof. Florovsky!')
            }
            return
        }, 1 * 1000)
    }
}


console.log('1° apresentação\n')
apresentar(13, 19)


//console.log('2° apresentação\n')
//apresentar(22, 23)

//console.log('3° apresentação\n')
//apresentar(21, 22)
