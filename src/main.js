// main function to detect the weight
function obct(name, a, w) {
    if (a >= 5 && a <= 7) {
        if (w < 15) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 15KG at an age of ${a}`
        }
        else if (w > 20) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 20KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 8 && a <= 10) {
        if (w < 21) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 21KG at an age of ${a}`
        }
        else if (w > 25) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 25KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 11 && a <= 15) {
        if (w < 26) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 26KG at an age of ${a}`
        }
        else if (w > 30) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 30KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else if (a >= 16 && a <= 20) {
        if (w < 31) {
            console.log("underweight ", a)
            return `Hello ${name} !!! Your weight is less than recommended value of 31KG at an age of ${a}`
        }
        else if (w > 40) {
            console.log("overweight ", a)
            return `Hello ${name} !!! Your weight is greater than recommended value of 40KG at an age of ${a}`
        }
        else {
            console.log("perfect weight")
            return `Hello ${name} !!! Your weight is perfect`
        }
    }
    else {
        return 'error'

    }
}
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    var name = document.getElementById("name").value
    var age = parseInt(document.getElementById("age").value)
    var weight = parseInt(document.getElementById("weight").value)
    if (validate(age, weight)) {
        console.log("values are valid")
        append("p", obct(name, age, weight), "msg")
    }
    else {
        console.log("error occured")
    }
})

function validate(age, weight) {
    if (isNaN(age)) {
        informError("age")
        return false
    }
    else if (isNaN(weight)) {
        informError("weight")
        return false
    }
    else if (age < 5 && weight <= 14) {
        informError("weight")
        informError("age")
        return false
    }
    else if (age < 5) {
        informError("age")
        return false
    }
    else if (weight <= 14) {
        informError("weight")
        return false
    }

    else if (age > 20 && weight >= 40) {
        informError("weight")
        informError("age")
        return false
    }
    else if (age > 20) {
        informError("age")
        return false
    }
    else {
        informError("age", false)
        informError("weight", false)
        return true
    }
}

// render errors in html 
function informError(id, error = true) {
    document.getElementById(id).style.borderColor = error ? "red" : ""
}

// appending in html form 
function append(type, content, parent) {
    var node = document.createElement(type)
    node.innerText = content
    document.getElementById(parent).appendChild(node)
}