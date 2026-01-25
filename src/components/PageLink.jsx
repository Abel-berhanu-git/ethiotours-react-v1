// use this for later if you want more abstraction and  more control over the links

const PageLink = ({ href, text,itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
