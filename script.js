const input = document.getElementById('search_input')
const list =document.querySelector('#list')
// метод indexof ищет подстроку в строке
// возвращает позицию первого совпадения , а если оно не найдена то вернет минус 1
// синтаксис:строка.indexOf(что_ищем ,[откуда начать поиск])
//  let str= "i learn js"

// let letter = "п"
// функция проверяет содержит ли строка full в себе подстроку chunk
// если строка содержит подстроку то функция вернет true,иначе-false
function isMatching(full, chunk){
    let pos = full.toLowerCase().indexOf(chunk.toLowerCase());
   return pos !=-1;
   
}
// let index =str.toLowerCase().indexOf(letter.toLocaleUpperCase())

// let pos=isMatching(str,letter)


input.addEventListener('keyup',()=>{
let items=document.querySelectorAll('.item')
let value = input.value;
for(let item of items){
    // если функция isMatching найдет введенное в строку поиска содержимое внутри элимента списка
    if(isMatching(item.textContent, value) && value!=''){
       //  отображаем этот элимент на экране 
        item.style.display='flex'
    }else{
        // иначе скрываем этот элимент
        item.style.display="none"
    }
}
})