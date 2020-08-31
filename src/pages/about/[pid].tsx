import React from 'react';
import {useRouter} from 'next/router'
import { route } from 'next/dist/next-server/server/router';

interface Props {

}
const About: React.FC<Props> = () => {
    const router = useRouter();
    const {pid} = router.query;
return (<div>hahaha{pid}</div>);
}

export default About