import Link from 'next/link';
import React from 'react';

const HeaderMenu = ({ data }) => {
  function genMenu(group, menu = 0) {
    menu++;
    return group.map((child) => {
      if (!child.children)
        return (
          <li>
            <Link href="#" title={child.title}>
              {child.title}
            </Link>
          </li>
        );
      return (
        <li
          className="hasChild"
          key={child.title}
          onClick={(e) => {
            e.preventDefault();
            e.target.classList.toggle('active');
          }}
        >
          {!child.children ? (
            <Link href={child.url || '#'} title={child.title}>
              {child.title}
            </Link>
          ) : (
            <>
              <Link href="#" title={child.title}>
                {child.title}
                <span>›</span>
              </Link>
              <ul className={'menu' + menu}>{genMenu(child.children, menu)}</ul>
            </>
          )}
        </li>
      );
    });
  }

  return <>{genMenu(data)}</>;
};

export default React.memo(HeaderMenu);
