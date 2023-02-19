import sgMail from '@sendgrid/mail';
import { SENDGRID_API, HOST_EMAIL } from '../constants/index'

sgMail.setApiKey(SENDGRID_API);

const  mulitemail = async ( subject, text, html) =>{
    try{
        const msg = {
            from: HOST_EMAIL,
            to: ['homiemusa@gmail.com', 'wagolemusa@gmail.com'],
            subject,
            text,
            html,
        };
        await sgMail.sendMultiple(msg);
        console.log("MAIL_SENT");
    } catch(error){
        console.log(error);
    }finally{
        return;
    }
}

export default mulitemail;