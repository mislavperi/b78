import { Flex, Image } from '@mantine/core';

export function Legal() {
  return (
    <Flex mih="200px" wrap="wrap" align="center" justify="space-around" bg="#02323C" py={20} gap="md">
      <Image src="/assets/hamag1.jpg" alt="HAMAG-BICRO co-financing logo" width={400} fit="contain" />
      <Image src="/assets/eu1.jpg" alt="European Union co-financing logo" width={400} fit="contain" />
      {/* Restaurant Guru award widget (styles/behaviour provided by r_rcm.css). */}
      <div id="r-rcm" data-length="33" className=" r-rcm_black ">
        {' '}
        <a
          href="https://restaurantguru.com/Beer-and-More-Bol"
          className="r-rcm_r-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boket78
        </a>{' '}
        <div className="r-rcm_year">2023</div>{' '}
        <div className="r-rcm_bottom r-rcm_row-doubled ">
          {' '}
          <span className="r-rcm_str1 ">Best</span> <span className="r-rcm_str2 ">restaurant</span>{' '}
        </div>{' '}
        <div className="r-rcm_heading">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="144px"
            height="144px"
            viewBox="0 0 144 144"
          >
            {' '}
            <defs>
              {' '}
              <path id="r-rcm-arc" d="M 12 72 a 60 60 0 0 0 120 0" />{' '}
            </defs>{' '}
            <text className="r-rcm_headingbottom r-rcm_small " fill="#fff" textAnchor="middle">
              {' '}
              <textPath startOffset="50%" xlinkHref="#r-rcm-arc">
                <a href="https://restaurantguru.com/" className="r-rcm_heading_link">
                  Restaurant Guru
                </a>
              </textPath>{' '}
            </text>{' '}
          </svg>{' '}
        </div>
      </div>
    </Flex>
  );
}
