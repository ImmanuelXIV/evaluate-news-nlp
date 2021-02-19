import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'
import { updateEntry } from './js/updateEntry'


console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    postData,
    updateEntry
}
