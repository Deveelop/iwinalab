import './About.css';
import img from './images/efosa.jpg'
import Typography  from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          iwina.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




export default function About () {
    return (
        <Container>
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
        <Box>
            <Copyright />
        </Box>
        </Container>
    )
}