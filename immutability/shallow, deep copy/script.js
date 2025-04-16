// Shallow copy (copia superficial)
// Nao pega os itens aninhados
// Recomendado para valores primitivos
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Rodrigo", email: "rodrigo@email.com"}],
}

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
}
// Vai modificar o htmlCourse
// Students e uma referencia, nao uma copia
jsCourse.students.push({name: "Joao", email: "joao@email.com"})
console.log(htmlCourse,jsCourse)

// Deep Copy (copia profunda)
// Recomendado para objetos
const nodeCourse = {
    ...htmlCourse,
    course: "NodeJs",
    students: [...htmlCourse.students],
}
console.log(htmlCourse, nodeCourse)

nodeCourse.students.push({name: "Lucas", email: "lucas@email.com"})
nodeCourse.students.push({name: "Gabriel", email: "gabriel@email.com"})
console.log(htmlCoursenodeCourse)