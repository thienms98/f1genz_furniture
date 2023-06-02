'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import { fsaleTimer, remainingTime } from '~/utils';

const FsaleTimer = ({ fsale, fsaling }) => {
  const [bait, setBait] = useState(true);
  const fsaleType = fsaleTimer(fsale.start, fsale.end);
  const remainTime = remainingTime(fsale.end);

  useEffect(() => {
    const counting = setTimeout(() => {
      setBait((prev) => !prev);
    }, 1000);

    return () => clearTimeout(counting);
  }, [bait]);

  return (
    <div
      className={classNames(
        'home-fsale-head-item',
        { started: fsaleType !== -1 },
        { active: fsale.id === fsaling },
        { ended: fsaleType === 1 },
      )}
      key={fsale.id}
    >
      <Image title="Tủ quần áo" className="lazyload" alt="Flash Sale Icon" {...fsale.image} />
      <label>{fsaleType === -1 ? 'Sắp diễn ra' : fsaleType === 0 ? 'Đang diễn ra' : 'Đã kết thúc'}</label>
      <div className="home-fsale-head-item-countdown" data-start={fsale.start} data-end={fsale.end}>
        <span className="hours">
          <b>{fsaleType === 1 ? '00' : remainTime.hour}</b>
          <strong>Giờ</strong>
        </span>
        <span className="minutes">
          <b>{fsaleType === 1 ? '00' : remainTime.min}</b>
          <strong>Phút</strong>
        </span>
        <span className="seconds">
          <b>{fsaleType === 1 ? '00' : remainTime.sec}</b>
          <strong>Giây</strong>
        </span>
      </div>
      <Link className="home-fsale-cta d-none d-sm-block" href={fsale.url} title={fsale.title}>
        Xem tất cả
      </Link>
    </div>
  );
};

export default FsaleTimer;
