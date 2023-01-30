// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import { IBrand } from '~/interfaces/brand';

// public\sound\mixkit-car-horn-718.wav

import useSound from 'use-sound';

// import fanfareSfx from '../../../public/sound/horn.mp3';



    

export type IBlockBrandsLayout = 'columns-8-full' | 'columns-7-sidebar';

interface Props {
    layout: IBlockBrandsLayout;
    brands: IBrand[];
}
// const play = () => {
//     useSound(boopSfx);}

function BlockBrands(props: Props) {
    // const FanfareButton = () => {
    const [play, { stop }] = useSound('/sound/horn3.mp3', {
        sprite: {
          laser: [0, 4000],
          explosion: [5000, 4000],
          meow: [7000, 4000],
        },
      });
    const [play1,] = useSound('/sound/horn2.mp3');
    const [play2,] = useSound('/sound/horn.mp3');
    const { layout, brands } = props;

   
    return (
        <div className={`block block-brands block-brands--layout--${layout}`}>
            <div className="container">
                <ul className="block-brands__list">
                    {brands.map((brand, brandIdx) => (
                        <React.Fragment key={brandIdx}>
                            <li className="block-brands__item" onMouseEnter={() => play({id:brand.country})} onMouseLeave={() => stop()}>
                                <AppLink href="/" className="block-brands__item-link">
                                    <AppImage src={brand.image} />
                                    <span className="block-brands__item-name">{brand.name}</span>
                                </AppLink>
                            </li>
                            <li className="block-brands__divider" role="presentation" />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default React.memo(BlockBrands);
