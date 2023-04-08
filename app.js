const students = [
    {
        id: 0,
        firstName: "Tran",
        lastName: "Cuong",
        email: "cuongtvhe176258@fpt.edu.vn",
        mathMark: 9,
        proMark: 9
    },
    {
        id: 1,
        firstName: "Nguyen Minh",
        lastName: "Vuong",
        email: "vuonghe17834@fpt.edu.vn",
        mathMark: 4,
        proMark: 4
    },
    {
        id: 2,
        firstName: "Tran",
        lastName: "Cuong",
        email: "cuongtvhe176258@fpt.edu.vn",
        mathMark: 9,
        proMark: 9
    },
    {
        id: 3,
        firstName: "Tran Anh",
        lastName: "Vu",
        email: "Vuptahe176528@fpt.edu.vn",
        mathMark: 3,
        proMark: 4
    },
    {
        id: 4,
        firstName: "Nguyen Van",
        lastName: "Quang",
        email: "Quangnvhe18358@fpt.edu.vn",
        mathMark: 8,
        proMark: 8
    },
    {
        id: 5,
        firstName: "Tran Anh",
        lastName: "Vu",
        email: "Vuptahe176528@fpt.edu.vn",
        mathMark: 8,
        proMark: 7
    },
    { id: 6,
        firstName: "Tran",
        lastName: "Cuong",
        email: "cuongtvhe176258@fpt.edu.vn",
        mathMark: 5,
        proMark: 8
    },
    
    {
        id: 7,
        firstName: "Nguyen Minh",
        lastName: "Vuong",
        email: "vuonghe17834@fpt.edu.vn",
        mathMark: 3,
        proMark: 1
    },
    {
        id: 8,
        firstName: "Tran",
        lastName: "Cuong",
        email: "cuongtvhe176258@fpt.edu.vn",
        mathMark: 7,
        proMark: 6
    },
    {
        id: 9,
        firstName: "Tran Anh",
        lastName: "Vu",
        email: "Vuptahe176528@fpt.edu.vn",
        mathMark: 3,
        proMark: 4
    },
    {
        id: 10,
        firstName: "Nguyen Van",
        lastName: "Quang",
        email: "Quangnvhe18358@fpt.edu.vn",
        mathMark: 10,
        proMark: 9
    }
]
let numberSubject = 2;
let tableBody = document.querySelector('.table-body')
let html = ''
let studentList = students.forEach((student)=> {
    let markAverage = (student.mathMark+student.proMark)/numberSubject;
   html += `
     <tr class="${getColor(markAverage)}">
         <td>${student.id+1}</td>
         <td>${student.firstName}</td>
         <td>${student.lastName}</td>
         <td>${student.email}</td>
         <td>${student.mathMark}</td>
         <td>${student.proMark}</td>
         <td>${markAverage}</td>
         <td>${getStatus(markAverage)}</td>
     </tr>
   `
})
function getStatus(markAverage) {
  return markAverage>4?'pass':'not Pass';
}
function getColor(markAverage) {
    if(markAverage>4) {
        return 'table-success'
    }else{
        return 'table-danger'
    }
  }
tableBody.innerHTML = html
let printBtn = document.querySelector('.print-btn')
printBtn.addEventListener('click', ()=> {
   window.print()
})
