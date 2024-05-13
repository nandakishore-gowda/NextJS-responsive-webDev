import Link from 'next/link';

function NvMenuItems(props) {
  return (
    <>
    <ul className='cursor-pointer  font-Poppins hidden md:block'>

        <Link href={props.nlink}>
          <a className=''> 
        <li>{props.title}</li>
        </a>
        </Link>
    </ul>

    <li className='md:hidden font-Poppins'>
    <Link href={props.nlink}>
      <a>{props.title}</a>
      </Link>
    </li>
    
  </>
  );
}
export default NvMenuItems