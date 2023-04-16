// footer component w/ links, copyright, and social media icons
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './footer.css';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
const FooterComponent = () => {
    
    return (
      <footer>
        
          
          <h4>&copy; {new Date().getFullYear()} - Recipeasy.</h4>
          <div class="social-icons">
      <a href="#"><i class="fab fa-facebook"><FacebookOutlined /></i></a>
      <a href="#"><i class="fab fa-instagram"><InstagramOutlined /></i></a>
      <a href="#"><i class="fab fa-twitter"><TwitterOutlined /></i></a>
    </div>
        
      </footer>
    );
  };
  
  export default FooterComponent;