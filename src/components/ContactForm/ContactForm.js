import * as React from "react";
import './ContactForm.scss';
import FormElement from "../FormElement/formElement";
import emailjs from 'emailjs-com';
import { checkValidity } from "../../shared/utility";
import Notification from '../Notification/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {

    const formData = [
        {
            id: "name",
            type: "input",
            label: "Full name",
            value: "",
            valid: false,
            touched: false,
            rules: {
                required: true
            },
            validationMessage: "This field is required."
        },
        {
            id: "email",
            type: "input",
            label: "Your email",
            value: "",
            valid: false,
            touched: false,
            rules: {
                required: true,
                isEmail: true,
            },
            validationMessage: "Please enter a valid email."
        },
        {
            id: "message",
            type: 'textarea',
            label: "Your message...",
            value: "",
            valid: false,
            touched: false,
            rules: {
                required: true
            },
            validationMessage: "This field is required.",
            rows: 15,
        },
    ];

    const [contactFormData, setContactFormData] = React.useState(formData);
    const [formSubmitNotification, setFormSubmitNotification] = React.useState(false);
    const [formValid, setFormValid] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const onElementValueChanged = (event, id) => {

        const newFormData = [...contactFormData];

        const dataIndex = newFormData.findIndex((formData) => {
            return formData.id === id;
        });

        console.log(checkValidity(event.target.value, newFormData[dataIndex].rules));
        newFormData[dataIndex] = {
            ...newFormData[dataIndex], value: event.target.value, valid:  checkValidity(event.target.value, newFormData[dataIndex].rules), touched: true
        }
        checkFormValid(newFormData);
        setContactFormData(newFormData);
    }

    const onHandleContactFormSubmit = (event) => {
        event.preventDefault();
        for(var i = 0; i < contactFormData.length; i++){
            if(contactFormData[i].valid === false){
                setFormValid(false);
                break;
            }
        }
        if(formValid){
            setFormSubmitNotification(true);
            sendMyselfEmail();
            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitNotification(false);
            }, 3000 )
        }
    }

    const sendMyselfEmail = (templateParams) => {
        emailjs.init("user_lgwXf2cv5dRTi4iuNvDe7");
        emailjs.send('service_ara43sh', 'template_555whes', templateParams);
    }

    const checkFormValid = (data) => {
        for(var i = 0; i < data.length; i++){
            if(data[i].valid === false){
                setFormValid(false);
                break;
            }
            setFormValid(true);
        }
    }

    React.useEffect(() => {
        checkFormValid(contactFormData);
    }, [])


    return (
        <>
            {
                formSubmitNotification ? <Notification message="Thanks for reaching out, I'll be in touch!"/> : null
            }
            <form className="ContactForm"  onSubmit={(event) => onHandleContactFormSubmit(event)}>
                {
                    contactFormData.map( formElement => (
                        <FormElement 
                            key={formElement.id} 
                            type={formElement.type} 
                            label={formElement.label} 
                            value={formElement.value} 
                            valid={formElement.valid}
                            touched={formElement.touched}
                            validationMessage={formElement.validationMessage}
                            changed={(event) => onElementValueChanged(event, formElement.id)}
                            />
                    ))
                }
                <div className="form-footer text-right">
                    <button className={formSubmitted ? 'submitted' : ''} disabled={!formValid} type="submit">
                        <span className="submit-text">Send Message</span>
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm;