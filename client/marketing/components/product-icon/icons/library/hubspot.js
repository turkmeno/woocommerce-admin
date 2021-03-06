/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

const hubspot = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="100"
		height="100"
		viewBox="0 0 100 100"
	>
		<defs>
			<clipPath id="b">
				<rect width="100" height="100" />
			</clipPath>
		</defs>
		<g id="a" clipPath="url(#b)">
			<rect width="100" height="100" fill="#fff" />
			<Path
				d="M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z"
				fill="#ff7a59"
			/>
		</g>
	</SVG>
);

export default hubspot;
