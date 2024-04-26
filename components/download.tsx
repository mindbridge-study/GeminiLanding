import React from 'react';
import Image from 'next/image';

export default function Download({ size } : { size: number}) {
    return (
		<div className='flex gap-2'>
			<button>
				<Image
                    src="/PlayStore/google-play-badge.png"
                    alt="Download on the Play Store"
                    width={size+15}
                    height={0}
                />
			</button>
			<button>
				<Image
					src="/AppStore/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
					alt="Download on the App Store"
					width={size}
					height={0}
				/>
			</button>
		</div>
	);
};