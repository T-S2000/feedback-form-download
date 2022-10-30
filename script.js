let myForm = document.getElementById('form');

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let fname = document.getElementById('name').value;
    let email1 = document.getElementById('email').value;
    let phone1 = document.getElementById('phone').value;
    let comments = document.getElementById('message').value;
    var myFile = await new File([`${fname}\n ${email1}\n ${phone1}\n\n\n\n Comments : ${comments}`], "demo.txt", { type: "text/plain;charset=utf-8" });
    saveAs(myFile);
})
