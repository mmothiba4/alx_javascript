#!/usr/bin/node


function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(fullName);

    function displayFullName() {
        alert(`Welcome + ${fullName}!`)
    }

    displayFullName();
}
welcome('Holberton', 'School');
alert(fullName)