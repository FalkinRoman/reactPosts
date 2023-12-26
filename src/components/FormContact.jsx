import React, { useEffect, useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyTextarea from './UI/textarea/MyTextarea';
import MyButton from './UI/button/MyButton';
import { FormService } from '../API/FormService';
import { useFetching } from '../hook/useFetching';
import MyNotification from './UI/notification/MyNotification';

const FormContact = () => {

    const [name, setName] = useState('') 
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [email, setEmail] = useState('') 
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('email не может быть пустым')
    const [comment, setComment] = useState('')
    const [notification, setNotification] = useState(false) 
    const [validForm, setValidForm] = useState(false)
    const [fetchForm, FormLoading, formError] = useFetching(async () => {
        const formData = {
            name,
            email,
            comment,
        };
        await FormService.sendFormToTelegram(formData)
       
      })


    useEffect(() => {
        if (nameError || emailError) {
            setValidForm(false)
        }else {
            setValidForm(true)
        }
    }, [nameError, emailError])


    //Валидация для имени
    const nameHandler = (e) =>{
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 20) {
            setNameError("Поле имя должно быть длинеее 3 и меньше 20")
            if(!e.target.value) {
                setNameError('Имя не может быть пустым')
            }
        } else {
            setNameError('')
        }
    }

    //Валидация для email
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некоректный email')
        }else {
            setEmailError('')
        }
    }


   //При смене фокуса с поля инпут 
    const blurHandler = (e) => {
        switch(e.target.name){
            case 'name': 
            setNameDirty(true)
            break

            case 'email': 
            setEmailDirty(true)
            break
        }
    }

    
    //Функция для отправки формы
    function sendForm(e) {
        setNotification(true)
        e.preventDefault()
        fetchForm()
        setName("")
        setEmail("")
        setComment("")   
    }
     


    return (
        
        <form className='form_contact' >
            {(notification) && 
            <div>
                <MyNotification>Форма успешно отправлена</MyNotification>
            </div>    
            }
            {(nameDirty && nameError) && <div style={{color: "red"}}>{nameError}</div>}
            <MyInput onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} value={name}  name="name" type="text" placeholder="Имя" />
            {(emailDirty && emailError) && <div style={{color: "red", marginTop: "10px"}}>{emailError}</div>}
            <MyInput onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email}  name="email" type="email" placeholder="Email" />
            <MyTextarea value={comment} onChange = {(e)=> setComment(e.target.value)} name="comment" type="text" placeholder="Комментарий" />
            <div className='flex flex_end'>
                <MyButton onClick={e => sendForm(e)} disabled={!validForm} type="submit">Отправить</MyButton>
            </div>
        </form>
    );
};

export default FormContact;