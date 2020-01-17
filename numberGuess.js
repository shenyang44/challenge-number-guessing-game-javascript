document.getElementById('btn').onclick = () => {
    let guess = () => prompt('Guess a number between 0 and 10:')

    let usernum;

    let num = Math.floor(Math.random() * 11);

    console.log(num)

    do {
        usernum = guess()
        if (usernum != '') {
            if (usernum == null) {
                break;
            }
            else if (usernum < num) {
                alert('Your guess is too small.')
            }
            else if (usernum > num) {
                alert('Your guess is too big.')
            }
            else if (usernum == num) {
                alert('Congrats! You got it!!')
            }
        }
    }
    while (usernum != num)
}
