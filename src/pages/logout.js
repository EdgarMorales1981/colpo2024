// components/Logout.js
import { useRouter } from 'next/router';

const Logout = () => {
    const router = useRouter();
    router.push('/login')

}


export default Logout;
