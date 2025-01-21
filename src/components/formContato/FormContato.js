import './style.css'
import img from '../../Galery/letter-removebg-preview.png';

function FormContato(){


return(
    <>
        <div id='container'>
            <img id='letterImg' src={img} />
            <form>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Informe seu email' required></input>

                <label for='telefone'>Telefone</label>
                <input type='number' id='telefone' name='telefone' placeholder='Telefone de contato' required></input>

                <label>
                    <input type='checkbox' name='Fan do Batman' required></input>
                    <span style={{marginLeft: '5px'}}>Fan do Batman?</span>
                </label>
                <label for='mensagem'>Mensagem</label>
                <textarea name='mensagem' row='10' cols='50' placeholder='Escreva sua mensagem' required></textarea>
                <button type='submit'>Enviar</button>
            </form>
            
        </div>
    </>
)

}

export default FormContato;