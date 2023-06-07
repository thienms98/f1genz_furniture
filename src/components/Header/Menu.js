import Link from 'next/link';
import React from 'react';

const HeaderMenu = ({ data }) => {
  console.log(data);

  function genMenu(group, menu = 0) {
    menu++;
    const groupItem = Object.keys(group);
    return groupItem.map((item) => {
      if (!group[item])
        return (
          <li>
            <Link href="#" title={item}>
              {item}
            </Link>
          </li>
        );
      return (
        <li
          className="hasChild"
          key={item}
          onClick={(e) => {
            e.preventDefault();
            e.target.classList.toggle('active');
          }}
        >
          {typeof group[item] === 'string' ? (
            <Link href={group[item]} title={item}>
              {item}
            </Link>
          ) : (
            <>
              <Link href="#" title={item}>
                {item}
                <span>›</span>
              </Link>
              <ul className={'menu' + menu}>{typeof group[item] !== 'string' && genMenu(group[item], menu)}</ul>
            </>
          )}
        </li>
      );
    });
  }

  return <>{genMenu(data)}</>;
};

export default React.memo(HeaderMenu);
