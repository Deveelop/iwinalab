import './About.css';
import img from './images/efosa.jpg'

export default function About () {
    return (
        <div>
            <div className='wrapper'>
         <h1 className='aheader'>Meet our team</h1>

            <div className='team'>
            <div className='team__control'>
            <img src={img} alt='images'/>
            
            <br></br>
            <h3>Efosa Enoma</h3>
            <p className='role'>Founder & CEO</p>
            <p>Enterpreneur and strategy maintains key strategic relationships with clients. M.A international Political Economics and Development.</p>
            </div>
            
            <div className='team__control'>
         
            <img src={img}  alt='images'/>
            <br></br>
            <h3>Jeremiah Alufua</h3>
            <p className='role'>Developer</p>
            <p>Enterpreneur and strategy maintains key strategic relationships with clients. M.A international Political Economics and Development.</p>
           
            </div>

            <div className='team__control'>
          
            <img src={img} alt='images' />
            <br></br>
            <h3>Osakpolor</h3>
            <p className='role'>Human Capital Devt. and Learning</p>
            <p>Enterpreneur and strategy maintains key strategic relationships with clients. M.A international Political Economics and Development.</p>
          
            </div>

            <div className='team__control'>
            
            <img src={img} alt='images' />
            <br></br>
            <h3>Oladotun Ajao</h3>
            <p className='role'>Advisor</p>
            <p>Enterpreneur and strategy maintains key strategic relationships with clients. M.A international Political Economics and Development.</p>
          
            </div>
        </div>
        </div>
        </div>
    )
}