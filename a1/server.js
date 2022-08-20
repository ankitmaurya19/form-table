const input = document.querySelectorAll('.inp');

function check(x) {
    if((x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z') || (x == ' '))
     {return true;}
    else {
        return false;
    }
}

const validateForm = () => {
    var valid = true;
    for(let i = 0 ; i < input.length ; i++)
    {
        const str = input[i].value;
        alert(str.length);
        for(let j = 0 ; j < str.length ; j++){
            let x = str[j];
            if((x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z')) {
                // valid
            }
            else {
                valid = false;
                break;
            }

        }
        if(valid == false) {
            alert('Invalid inputs (Contains special character)')
            break;
        }
    }
}


