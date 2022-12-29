import './footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <div>
                <a href='https://www.facebook.com/luanfehenrique/' target='_blank' rel='noreferrer'>
                    <img src='/imagens/fb.png' alt='Facebook' width={'16px'} height={'16px'} className='social'/>
                </a>
                <a href='https://www.instagram.com/luanfehenrique/' target='_blank' rel='noreferrer'>
                    <img src='/imagens/ig.png' alt='Instagram' width={'16px'} height={'16px'} className='social'/>
                </a>
                <a href='https://twitter.com/LuanDS__' target='_blank' rel='noreferrer'>
                    <img src='/imagens/tw.png' alt='Twitter' width={'16px'} height={'16px'} className='social'/>
                </a>
                
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Logo' width={'72px'} height={'100%'}/>
            </div>
            <div>
                <span>Desenvolvido por LuanD3V by Alura</span>
            </div>
        </footer>
    )
}

export default Footer