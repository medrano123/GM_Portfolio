import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target="_blank" href="https://github.com/medrano123"><AiFillGithub  /></a>
            
        </div>
        <div>

          <a target="_blank" href ="https://www.linkedin.com/in/giovanni-m-0682a71ba/"><AiFillLinkedin />
</a>
        </div>
    </div>
  )
}

export default SocialMedia;