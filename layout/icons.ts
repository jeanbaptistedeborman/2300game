
const DEFAULT_SIZE = '.6cm';


export const getShipIcon =  (size:string = DEFAULT_SIZE):string => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M199.256 74.5v285H27.744l25.998 78H380.255l104-78h-267v-285h-18zm18 18c36.787 88.85 64.94 216 0 250h208c22-34-11.905-164.76-208-250zm-36 0c-33.046 69.333-50 200-144 250h144v-250z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getWheelIcon = (size:string = DEFAULT_SIZE):string => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M256 15.99c-8.8 0-16 14.33-16 32 0 8.47 1.7 16.59 4.7 22.57-4.7.21-9 1.16-13.7 2.43v15.85c17.1-2.42 34.1-2.31 50 0V72.99c-4.5-1.35-9.4-2.11-13.7-2.43 3-5.98 4.7-14.1 4.7-22.57 0-17.67-7.2-32-16-32zM86.23 86.28c-6.25 6.25-1.19 21.42 11.3 33.92 6.07 6 12.97 10.6 19.37 12.7-3.2 3.5-5.6 7.2-8 11.4l11.3 11.2c9.9-13.4 21.9-25.4 35.3-35.3l-11.2-11.3c-4.2 2.2-8 5.2-11.4 8-2.1-6.4-6.7-13.3-12.7-19.3-8-6.21-24.55-20.4-33.97-11.32zm305.57 11.3c-6 6.02-10.6 12.92-12.7 19.32-3.5-3.2-7.2-5.6-11.4-8l-11.2 11.3c13.4 9.9 25.4 21.9 35.3 35.3l11.3-11.2c-2.2-4.2-5.2-8-8-11.4 6.3-2.2 13.2-6.7 19.2-12.7 12.5-12.5 17.6-27.69 11.3-33.93-9.9-7.87-28 5.62-33.8 11.31zm-142.3 7.52c-36.8 1.6-70.2 16.3-95.6 39.6-3.3 3.1-6.6 6.3-9.2 9.2-23.3 25.4-38 58.8-39.6 95.7 0 4.5-.2 9.1.1 13 1.5 36.8 16.2 70.2 39.5 95.6 3.1 3.2 6.4 6.5 9.2 9.2 25.4 23.2 58.8 37.9 95.6 39.5h.2c4.1.2 8.7 0 12.8 0 36.8-1.6 70.2-16.3 95.6-39.6 3.3-3.1 6.6-6.3 9.2-9.2 23.3-25.4 38-58.8 39.6-95.6v-.2c.2-4.2 0-8.7 0-12.8-1.6-36.8-16.3-70.2-39.6-95.6-3.1-3.3-6.3-6.6-9.2-9.2-25.4-23.3-58.8-38-95.6-39.6-4.5-.2-9.1 0-13 0zm6.5 10.7c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm6.9 28.4c25.7 1.6 49.1 11.8 67.3 27.9 3.4 3.1 6.7 6.3 9.7 9.7 16.1 18.2 26.3 41.6 27.9 67.4.4 4.6 0 9.2 0 13.7-1.6 25.7-11.8 49.1-27.9 67.3-3.1 3.4-6.3 6.7-9.7 9.7-18.2 16.1-41.6 26.3-67.4 27.9-4.6.1-9.2.4-13.7 0-25.7-1.6-49.1-11.8-67.2-27.9h-.1c-3.4-3-6.6-6.3-9.6-9.7-16.1-18.1-26.4-41.5-28-67.3-.1-4.6-.4-9.1 0-13.6.5-25.8 13.3-50.5 27.9-67.5 3.1-3.4 6.3-6.7 9.7-9.7 18.2-16.1 41.6-26.3 67.4-27.9 4.6-.4 9.2 0 13.7 0zm-94.8 12.6c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-3.1-3.1-3.1-8.2 0-11.3 3.5-2.9 8.2-2.9 11.3 0zm187.1 0c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-3.1-3.1-3.1-8.2 0-11.3 3.5-2.9 8.2-2.9 11.3 0zM240 163.3v8.7c2.5 3.2 4.4 5.5 7.8 6.8-.7 12.4-1.6 25.1-2.8 37.7 7.4-1.9 15.2-2 22.1.1-1.2-12.7-2.2-25.4-2.9-37.9 7.9-2.1 7.8-8.6 7.8-15.4-11-1.7-21.8-1.6-32 0zm-38.3 15.8c-8.7 6.2-16.4 13.9-22.6 22.6l6.2 6.2c4 .5 7 .8 10.3-.7 8.3 9.3 16.6 18.9 24.7 28.7 3.7-6.5 9.1-11.9 15.7-15.6-9.9-8.1-19.5-16.4-28.8-24.7 1.8-3.1 1.3-6.7.7-10.3zm108.6 0l-6.2 6.2c-.7 4-.8 6.9.6 10.3-9.2 8.3-18.9 16.6-28.7 24.7 6.5 3.7 11.9 9.1 15.6 15.7 8.1-9.9 16.5-19.5 24.7-28.8 3.2 1.7 6.7 1.3 10.3.7l6.2-6.2c-6.2-8.7-13.8-16.4-22.5-22.6zM423.1 231c2.5 17.1 2.3 34.1 0 50H439c1.5-4.5 2-9.4 2.3-13.7 6 3 14.2 4.7 22.7 4.7 17.7 0 32-7.2 32-16s-14.3-16-32-16c-8.5 0-16.7 1.7-22.7 4.7-.1-4.7-1-9-2.3-13.7zm-350.07.1c-1.35 4.5-2.11 9.2-2.4 13.6-6.02-3-14.15-4.6-22.6-4.6-17.67 0-32 7.2-32 16s14.33 16 32 16c8.48 0 16.61-1.7 22.6-4.7.15 4.7 1.12 9 2.4 13.7h15.8c-2.38-17.1-2.5-34.1 0-50zM256 233c-12.9 0-23 10.2-23 23s10.1 23 23 23c12.8 0 23-10.2 23-23s-10.2-23-23-23zm84 7c-3.2 2.5-5.5 4.4-6.8 7.8-12.4-.7-25.1-1.6-37.7-2.8 1.9 7.5 1.9 15.2 0 22.1 12.6-1.2 25.2-2.2 37.7-2.9 1 3.5 3.8 5.7 6.8 7.8h8.7c1.7-11 1.6-21.8 0-32zm-176.7.1c-1.7 10.9-1.5 21.8 0 32h8.7c3.1-2.5 5.6-4.3 6.7-7.8 12.5.6 25.1 1.6 37.8 2.8-2-7.5-2-15.2-.1-22.1-12.6 1.2-25.3 2.1-37.7 2.8-.9-3.5-3.8-5.7-6.7-7.7zm224.9 7.9c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm-264.4.1c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm167.9 28c-3.7 6.5-9.1 11.9-15.7 15.6 9.9 8.1 19.5 16.4 28.8 24.7-1.8 3.1-1.3 6.7-.7 10.3l6.2 6.2c8.7-6.2 16.4-13.9 22.6-22.6l-6.2-6.2c-4-.5-7-.8-10.3.7-8.3-9.3-16.6-18.9-24.7-28.7zm-71.4 0c-8.1 9.8-16.4 19.4-24.7 28.7-3.1-1.8-6.7-1.3-10.2-.7l-6.3 6.2c6.2 8.8 13.9 16.5 22.7 22.6l6.2-6.2c.5-4 .8-7-.7-10.3 9.3-8.3 18.9-16.6 28.7-24.7-6.5-3.7-12-9.1-15.7-15.6zm24.6 19.3c1.2 12.7 2.2 25.4 2.9 37.9-3.5.8-5.8 3.8-7.8 6.7v8.7c11 1.7 21.8 1.6 32 0V340c-2.5-3.2-4.4-5.5-7.8-6.8.7-12.4 1.6-25.1 2.8-37.7-7.7 1.3-15.8 1.7-22.1-.1zm-76.7 48.5c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-3.1-3.1-3.1-8.2 0-11.3 3.5-3 8.2-3 11.3 0zm187 0c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-3.1-3.1-3.1-8.2 0-11.3 3.5-3 8.3-3 11.3 0zm36.6 12.6c-9.9 13.4-21.9 25.4-35.3 35.3l11.2 11.3c4.2-2.2 8-5.2 11.4-8 2.1 6.4 6.7 13.3 12.7 19.3 12.5 12.5 27.6 17.5 33.9 11.3 6.2-6.3 1.2-21.4-11.3-33.9-6-6-12.9-10.6-19.3-12.7 3.2-3.5 5.6-7.2 8-11.4zm-271.6 0L109 367.7c2.3 4.1 5.1 8.2 8 11.4-6.4 2.1-13.3 6.7-19.37 12.7-12.47 12.5-17.52 27.6-11.3 33.9 6.24 6.3 21.47 1.2 33.97-11.3 6-6 10.6-12.9 12.7-19.3 3.5 3.2 7.2 5.6 11.4 8l11.2-11.2c-13.5-10-25.4-21.9-35.4-35.4zM256 380.2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm-25 43V439c4.5 1.4 9.4 2.1 13.7 2.4-3 6-4.7 14.1-4.7 22.6 0 17.7 7.2 32 16 32s16-14.3 16-32c0-8.5-1.7-16.6-4.7-22.6 4.7-.2 9-1.1 13.7-2.4v-15.9c-17.1 2.5-34.1 2.4-50 .1z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getMilitaryIcon =(size:string= DEFAULT_SIZE):string =>  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm146.43-65.76l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getEarthIcon= (size:string= DEFAULT_SIZE)=>  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M480.25 156.355c0 161.24-224.25 324.43-224.25 324.43S31.75 317.595 31.75 156.355c0-91.41 70.63-125.13 107.77-125.13 77.65 0 116.48 65.72 116.48 65.72s38.83-65.73 116.48-65.73c37.14.01 107.77 33.72 107.77 125.14z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getEcologyIcon = (size:string= DEFAULT_SIZE):string => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M256 23c-71.69 0-130 58.31-130 130s58.31 130 130 130 130-58.31 130-130S327.69 23 256 23zm-8.33 31.127l-11.774 35.246 52.145-5.463-5.186-17.457 14.624 4.049v19.367l22.843 1.49-4.468-17.38 12.007-6.954C352.41 87.553 368 118.417 368 153c0 16.668-3.625 32.471-10.125 46.672l-26.13 4.422v31.478a112.138 112.138 0 0 1-16.099 12.29l-11.216-17.448-21.852 5.96 6.14 23.786A112.353 112.353 0 0 1 256 265c-31.013 0-59.037-12.535-79.297-32.826l19.96-2.752 13.41-26.322-42.712-21.354 30.295-25.826-26.32-21.85-26.893 8.963c3.112-35.448 22.653-66.103 50.994-84.318l5.696 45.556 46.537-50.144zm38.88 64.217l-36.17 23.176 31.606 28.093 22.827-6.672-2.108 27.391 41.79-10.535-15.804-35.818-25.283.351 22.475-19.314-39.332-6.672zm-37.573 40.383l-19.315 8.427 13.695 10.184 5.62-18.611zm-45.362 3.154l-13.408 15.89 37.147 26.108-23.739-41.998zm59.76 8.785l-13.695 25.637 33.01 22.474-11.59-16.506 14.398-17.207-22.123-14.398zM60.17 198.061c-8.818-.137-17.843 11.093-17.895 39.882-.078 44.153-4.356 56.616 16.077 106.551C73.335 381.112 80.054 409.257 128 432c5.68 20.022 3.413 24.73-.44 41.84-3.596 15.974 33.423 18.91 60.534 5.453 29.091-15.868 26.65-59.557 21.453-89.184-6.044-34.454-25.06-41.615-41.543-56.332-17.115-24.475-21.098-68.813-48.856-86.699-5.797-3.735-35.37-7.527 5.262 93.942-53.571-13.268-43.813-74.773-47.687-120.31-1.154-13.561-8.773-22.53-16.553-22.65zm391.66 0c-7.78.12-15.399 9.088-16.553 22.65-3.874 45.536 5.884 107.041-47.687 120.309 40.633-101.47 11.059-97.677 5.262-93.942-27.758 17.886-31.74 62.224-48.856 86.7-16.482 14.716-35.5 21.877-41.543 56.331-5.197 29.627-7.638 73.316 21.453 89.184 27.111 13.456 64.13 10.521 60.533-5.453-3.852-17.11-6.119-21.818-.439-41.84 47.946-22.743 54.665-50.888 69.648-87.506 20.433-49.935 16.155-62.398 16.077-106.55-.052-28.79-9.077-40.02-17.895-39.883z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getMoneyIcon = (size:string= DEFAULT_SIZE)=> `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" transform="translate(0,0)" style=""><path d="M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z" fill="#fff" fill-opacity="1"/></g></svg>`
export const getCogIcon =(size:string= DEFAULT_SIZE)=>  `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M179.625 22.313L163.22 58.937c-3.258-.384-6.498-.604-9.72-.624-10.577-.066-20.857 1.808-30.47 5.28L99.78 31.032 55.75 63.188l24.063 33.657c-7.21 10.412-12.3 22.5-14.5 35.75l-42.72 4.687 5.345 54.25 45.468-5c5.082 10.2 12.078 19.372 20.594 26.97l-19.406 43.375 49.375 22.094 19.5-43.564c11.656 1.242 23.08.128 33.75-3l28.124 38.53 31.72-23.186 11.655 20.156C234.014 279.138 220.873 292.3 209.624 307l-49.22-28.344-25.718 46.72 48.125 27.937c-7.068 16.934-11.967 34.975-14.343 53.812H112.5v53.72h56.22c1.66 12.053 4.372 23.753 8.03 35.06h169.312c-23.915-10.758-40.562-34.788-40.562-62.717 0-37.964 30.754-68.75 68.72-68.75 37.963 0 68.75 30.786 68.75 68.75 0 27.93-16.67 51.96-40.595 62.718h91.5V200.375l-11.688-6.406L454.594 242c-16.842-7.204-34.808-12.234-53.594-14.72v-55.53h-53.72v55.47c-18.303 2.377-35.83 7.183-52.31 14.03l-27.126-47.28-36 20.25-9.25-12.97c7.08-9.223 12.43-19.93 15.5-31.72l44.437-4.843-5.342-54.25-42.25 4.157c-4.92-12.618-12.648-23.953-22.563-33.094L229 44.406l-49.375-22.093zm-27.344 84.25c23.3-.24 42.94 17.827 44.376 41.343 1.48 24.275-17.004 45.144-41.28 46.625-24.278 1.483-45.145-16.974-46.626-41.25-1.48-24.274 16.973-45.142 41.25-46.624.76-.046 1.53-.086 2.28-.094z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getOilIcon = (size:String = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M263.844 40.344C234.1 213.202 145.594 248.03 145.594 369.22c0 60.804 60.106 105.5 118.25 105.5 59.45 0 115.937-41.803 115.937-99.533 0-116.332-85.2-162.312-115.936-334.843zm-58.28 217.094c-27.963 75.53-5.105 154.567 54.25 179.375 15.185 6.348 31.724 7.714 47.905 6.28-116.134 49.787-185.836-79.816-102.158-185.656z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getKnowledgeIcon = (size:String = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M228.844 32.22v114.218h17.687V32.218h-17.686zm-108.25.624c-15.507 0-28.094 12.586-28.094 28.093C92.5 76.444 105.087 89 120.594 89c12.655 0 23.34-8.372 26.844-19.875h44.937v77.313h17.688v-95H147.03c-3.888-10.837-14.262-18.593-26.436-18.593zm193.25 0c-15.507 0-28.063 12.586-28.063 28.093 0 12.124 7.677 22.45 18.44 26.376v59.124h17.655V87.844c11.596-3.452 20.063-14.193 20.063-26.906 0-15.508-12.587-28.094-28.094-28.094zM266.124 92.5v53.938h17.657V92.5h-17.655zm188.532 4.03c-15.507 0-28.094 12.588-28.094 28.095 0 13.083 8.948 24.074 21.063 27.188v27.468h-92.938v17.657h110.624v-46.342c10.223-4.192 17.407-14.233 17.407-25.97 0-15.507-12.557-28.094-28.064-28.094zM30.187 123.657v17.688H96.75v55.594h62.814V179.28h-45.126v-55.624h-84.25zm147.032 40.47v159.718h159.81v-159.72H177.22zm17.56 15.655h17.657v78.595l32.407 32.406h75.28v17.658H237.5l-2.594-2.594-10.75-10.75c-1.033 7.385-7.36 13.062-15.03 13.062-8.392 0-15.19-6.796-15.19-15.187 0-7.682 5.696-13.98 13.095-15l-9.655-9.658-2.594-2.593V179.78zm54.94.157h17.686v55.313h52.53l.002 17.688H249.72v-73zM53.124 217.375V307.344c-11.49 3.512-19.844 14.198-19.844 26.844 0 15.505 12.557 28.093 28.064 28.093s28.093-12.587 28.093-28.092c0-12.195-7.79-22.564-18.656-26.438v-72.72h88.782v-17.655H53.124zm301.563 0v17.656h53.968v-17.655h-53.97zm99.968 21.97c-10.898 0-20.342 6.21-25 15.28h-74.97l.002 17.688H427c2.325 13.168 13.824 23.187 27.656 23.187 15.507 0 28.063-12.588 28.063-28.094 0-15.507-12.557-28.062-28.064-28.062zm-349.062 15.28v17.688h53.97v-17.688h-53.97zm17.156 36.47v84.217c-11.498 3.513-19.875 14.2-19.875 26.844 0 15.506 12.587 28.094 28.094 28.094 15.506 0 28.06-12.588 28.06-28.094 0-12.194-7.766-22.564-18.624-26.437v-66.94h19.156v-17.686H122.75zm231.938 0v17.686h45.156v95.283c-11.323 3.624-19.53 14.26-19.53 26.78-.002 15.506 12.585 28.063 28.092 28.063 15.507 0 28.063-12.557 28.063-28.062 0-12.32-7.935-22.778-18.97-26.563V291.095h-62.814zM192.375 341.53v54.033h17.688V341.53h-17.688zm36.47 0v86.564c-11.013 3.794-18.94 14.233-18.94 26.53 0 15.506 12.588 28.095 28.095 28.095s28.063-12.59 28.063-28.095c0-12.53-8.203-23.14-19.532-26.75V341.53h-17.686zm37.28 0v54.033h17.688l-.032-54.032h-17.655zm38.094 0v140.064h17.655V341.53H304.22z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getBlimpIcon = (size:string = DEFAULT_SIZE)=> `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M494.905 253.49c0 42.47-47.24 77.43-156.85 80.77-1.9.06-57.36 0-61.36 0-121.48 0-259.6-80.77-259.6-80.77s138.11-80.76 259.6-80.76c4.14 0 60-.06 62 0 109.17 3.44 156.21 38.36 156.21 80.76zm-356-71.31l-28.21-35.35-53.69-16.22 7 81.17c9.54-4.34 60.6-24.86 74.87-29.6zm-74.9 113.01l-7 81.18 53.64-16.22 28.21-35.35c-14.25-4.74-65.31-25.26-74.85-29.61zM264.755 350l4.25 31.39h81l10.18-32.25c-15.55 1.3-91.4 1.03-95.43.86z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getCubeIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M256 24.585L51.47 118.989 256 213.394l204.53-94.405zM38.998 133.054v258.353L247 487.415V229.063zm434.004 0L265 229.062v258.353l208.002-96.008z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getCrossIcon =(size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size}"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M96.375 20.094l30.813 40.75 130.28 130.28L375.313 73.282l40.22-53.186-159.594 108.094L96.375 20.094zM452.22 59.53l-113.564 76.845-74.562 74.563-6.594 6.625-6.625-6.625L176.937 137 62.594 59.625l80.844 119.47 69.656 69.655 6.594 6.594-6.594 6.625-74.813 74.81L61.563 450.19l120.75-81.688 68.657-68.656 6.593-6.625 6.625 6.624 69.562 69.562 119.53 80.906-77.374-114.343-73.937-73.94-6.595-6.592 6.594-6.625 68.56-68.563 81.69-120.72zm-430 34.69l108.124 159.593L22.22 413.375l53.468-40.438L193.25 255.375 62.812 124.937 22.22 94.22zm470.624 3.155l-53.22 40.22-117.812 117.843 130.47 130.468 40.53 30.656L384.72 256.97 492.843 97.374zm-235.28 222.28l-117.69 117.69-40.343 53.342 159.595-108.093 159.563 108.094L388 450.094 257.562 319.656z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getGetCardIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M209.955 488.202l-121.242-46.62c-11.308-4.34-11.643-12.087-.79-17.288L204.8 469.236c15.024 5.777 37.23 4.92 51.774-1.96l161.522-76.6c10.014 4.436 9.864 11.818-.67 16.798L250.43 486.668c-10.983 5.195-29.128 5.902-40.477 1.534zm0-32.37L88.713 409.21C79.09 405.52 77.41 399.36 83.81 394.4l120.99 46.517c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.433c5.855 4.417 4.38 10.36-4.542 14.58l-166.993 79.193c-10.983 5.196-29.128 5.903-40.477 1.534zm0-28.314L88.713 380.892c-9.624-3.69-11.302-9.85-4.902-14.813l120.99 46.523c15.024 5.77 37.23 4.914 51.774-1.96l165.393-78.438c5.855 4.416 4.38 10.36-4.542 14.58l-166.993 79.2c-10.983 5.194-29.128 5.895-40.477 1.533zm0-28.32L88.713 352.572c-9.624-3.69-11.302-9.85-4.902-14.812l120.99 46.524c15.024 5.776 37.23 4.92 51.774-1.96l165.393-78.44c5.855 4.424 4.38 10.368-4.542 14.586l-166.993 79.194c-10.983 5.196-29.128 5.897-40.477 1.534zm0-28.32L88.713 324.26c-11.35-4.355-11.643-12.15-.66-17.353l87.236-41.376 34.826 18.323c15.365 8.09 37.937 7.06 52.5-2.39l65.74-42.672 88.404 34.007c11.344 4.357 11.65 12.16.665 17.354l-166.993 79.195c-10.983 5.195-29.128 5.902-40.477 1.534zm6.85-99.73L93.44 206.22c-10.767-5.67-11.217-15.647-1.018-22.268l105.11-68.228h25.845l.015 64.962h58.664v-64.962H332.2l-27.487-41.39 118.91 62.584c10.763 5.67 11.212 15.646 1.013 22.268L254.803 269.418c-10.2 6.62-27.23 7.4-37.997 1.73zm21.637-105.523V100.67h-34.845l49.13-79.74 49.12 79.74H267v64.955h-28.558z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getCubesIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M388.53 21.53c-38.006 30.546-63.492 66.122-83.952 103.687 12.746 7.812 25.587 14.923 38.516 21.38l88.744 34.04c13.746 3.8 27.583 6.995 41.51 9.625 13.493-42.908 19.872-85.824 19.433-128.73l-104.25-40zm-266.813 3.88l15.133 64.967 68.95 16.38-12.993-64.525-71.09-16.822zm-17.594 6.848L66.896 79.803l12.358 62.025 39.494-46.785-14.625-62.785zm27.783 76.148l-37.094 43.97 52.165 7.718c7.243-2.11 14.482-4.097 21.716-5.967l27.62-30.408-64.407-15.314zm170.57 37.346l8.776 58.912c5.91 6.06 11.636 12.256 17.13 18.615l89.024 34.157 45.317-50.218c-54.72-11.1-108.31-30.82-160.248-61.468zm-70.09 13.482c-49.324 9.35-98.335 21.9-147.224 42.645 40.825 34.878 76.848 72.364 105.988 113.538l149.204-44.686c-26.533-41.862-66.002-77.02-107.97-111.498zM65.71 209.848C45.093 260.13 28.07 311.115 24.24 367.025c24.535 52.892 70.202 90.623 110.764 119.72l42.476-158.45c-29.975-42.853-68.05-81.942-111.77-118.447zM351.07 287.03L195.39 333.66l-42.146 157.22c52.167-7.854 103.99-21.873 155.822-48.26 24.952-53.52 30.504-99.728 42.002-155.587z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getFireIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M245.05 15.514c34.29 48.815-23.535 320.54-90.302 136.72C106.796 325.11 38.956 332.518 38.876 252.55c-71.6 79.31 43.824 220.767 87.376 243.935h52.127c-45.92-40.016-76.784-78-82.176-135.968 47.312 9.423 71.855 20.96 81.263-62.048 60.736 86.59 100.944-49.376 137.184-107.12-1.647 40.32-3.343 93.456 22.848 129.888 8.736 12.143 33.232 16.11 54.736 15.807-9.92 16.08-44.848 69.376-17.008 89.2 27.84 19.824 33.072-.384 25.856 16.176-13.264 20.88-22.992 39.375-59.072 54.063h56.064c59.44-18.72 111.807-91.663 94.607-135.535-22.015 18.657-43.774 30.897-61.294 29.537 49.12-72.08 37.84-145.903 14.752-221.342-20.224 72.383-33.488 82.495-54.576 99.52 29.104-68.657-85.44-214.448-146.51-253.15z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getSpyGlassIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(0,0)" style=""><path d="M84.438 20.78c-.414.005-.824.01-1.25.032-2.273.113-4.742.477-7.376 1.094C65.28 24.373 52.858 31.236 42.094 42 31.33 52.763 24.467 65.186 22 75.72c-2.467 10.532-.738 18.23 3.75 22.718 3.93 3.93 10.33 5.763 18.938 4.5-1.82-5.496-1.757-11.592-.407-17.282 2.182-9.194 7.5-18.247 15.314-26.062 7.814-7.816 16.836-13.13 26.03-15.313 2.3-.544 4.695-.876 7.064-.968 3.515-.135 7.022.307 10.312 1.407 1.3-8.664-.52-15.082-4.47-19.032-3.154-3.156-7.896-4.97-14.093-4.907zm9.937 41.126c-.332-.006-.694.01-1.063.032-.98.06-2.08.23-3.343.53-5.057 1.2-11.542 4.728-17.157 10.344-5.616 5.617-9.145 12.1-10.344 17.157-1.2 5.054-.25 7.718 1.03 9l.344.343.312.406 41.344 51.25c4.423-9.226 10.846-18.254 19.03-26.44 8.186-8.183 17.214-14.607 26.44-19.03L99.72 64.156l-.407-.312-.344-.344c-.84-.84-2.273-1.552-4.595-1.594zm85.22 55.344c-.762-.02-1.564-.012-2.376.03-2.168.115-4.54.465-7.064 1.064-10.095 2.394-22.042 9.042-32.406 19.406-10.364 10.364-17.012 22.31-19.406 32.406-2.394 10.095-.727 17.367 3.5 21.594l.344.375.312.375 3.75 4.625c.046-.207.076-.418.125-.625 3.576-15.268 12.593-30.935 26.125-44.47 13.467-13.468 29.05-22.452 44.25-26.06l-4.25-3.44-.375-.343-.375-.343c-2.774-2.775-6.828-4.448-12.156-4.594zm31.186 25.656c-2.895-.01-6.086.374-9.56 1.188-11.122 2.604-24.185 9.838-35.5 21.156-11.318 11.318-18.552 24.378-21.157 35.5-2.117 9.036-1.316 16.178 1.656 21.125l.093.156 48.375 59.94c6.217-18.252 17.894-36.74 34.218-53.064 16.332-16.33 34.835-28.003 53.094-34.22L219.75 144.5c-2.557-1.017-5.562-1.583-8.97-1.594zm99.25 65.344c-.697.007-1.41.027-2.124.063-3.814.188-7.85.798-12.125 1.812-17.098 4.056-36.72 15.005-53.686 31.97-16.965 16.963-27.913 36.586-31.97 53.686-4.055 17.102-1.384 30.74 6.94 39.064l.342.344.313.406.31.406c.4-3.643 1.045-7.318 1.907-11 5.25-22.406 18.652-45.87 38.907-66.125 20.255-20.255 43.718-33.658 66.125-38.906 3.702-.87 7.4-1.513 11.06-1.907l-.436-.344-.406-.314-.344-.344c-5.853-5.852-14.346-8.918-24.813-8.812zm35.22 27.97c-4.95-.034-10.325.6-16.03 1.936-18.262 4.278-39.118 15.898-57.158 33.938-18.04 18.04-29.66 38.896-33.937 57.156-3.19 13.618-2.38 25.28 1.97 34.063l55.874 69.28c.46-3.185 1.058-6.378 1.81-9.593 6.32-26.98 22.565-55.408 47.126-79.97 24.56-24.56 52.96-40.773 79.938-47.092 2.055-.482 4.108-.89 6.156-1.25l-67.53-54.5h-.033c-5.132-2.575-11.256-3.924-18.187-3.97zm103.094 75.5c-.947.005-1.907.017-2.875.06-5.166.236-10.637 1.008-16.345 2.345-22.832 5.348-48.686 19.78-71.03 42.125-22.347 22.345-36.778 48.2-42.126 71.03-5.35 22.833-1.77 41.703 9.905 53.376 7.86 7.862 18.996 12.047 32.406 12.313-.68-.603-1.347-1.225-2-1.876-13.45-13.452-16.224-33.735-11.5-53.906 4.726-20.172 16.757-41.163 34.908-59.313 18.15-18.15 39.172-30.213 59.343-34.938 5.044-1.18 10.086-1.898 15.033-2.093 14.84-.586 28.754 3.505 38.843 13.594.673.672 1.318 1.356 1.938 2.062-.245-13.438-4.44-24.595-12.313-32.47-8.207-8.207-19.98-12.4-34.186-12.31zm8.28 47.717c-.65.005-1.3.032-1.968.063-3.564.167-7.37.687-11.375 1.625-16.024 3.754-34.44 14.003-50.374 29.938-7.822 7.822-14.263 16.238-19.25 24.687 1.697-2.026 3.503-4.003 5.438-5.938 17.012-17.01 38.125-24.96 53.22-21.5-5.877 2.765-11.803 6.865-17.158 12.22-16.19 16.19-21.17 37.454-11.125 47.5 7.735 7.733 22.152 6.587 35.75-1.75-3.07 4.568-6.748 9.03-10.967 13.25-18.512 18.51-41.876 26.32-57.063 20.343 7.814 6.11 19.617 7.906 34.156 4.5 16.025-3.754 34.44-14.003 50.375-29.938 15.936-15.934 26.185-34.35 29.94-50.375 3.752-16.024 1.195-28.71-6.5-36.406-5.413-5.41-13.32-8.293-23.095-8.22z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getTreeIcon = (size:string = DEFAULT_SIZE)=> `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:  ${size}; width:${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(1,4)" style=""><path d="M222.156 20.72c-1.423.01-2.843.065-4.25.155-20.084 1.29-37.527 10.342-46.375 27.03l17.626 12.532h-29.312c-10.333-5.256.412-.266-11.375-5.28-23.158-13.118-48.787-9.64-67.25 2.812-20.062 13.527-30.734 35.806-20.25 60.093l3.093 7.156-6.47 4.31c-21.435 14.36-32.997 30.393-37.124 48.126C16.34 195.39 19.65 215.64 31 238.5l2.47 5.03-3.25 4.564c-13.796 19.38-8.88 38.668 5.968 51.03 10.043 8.364 19.48 9.982 29.656 7.407 10.177-2.574 21.15-10.15 30.72-21.874l2.655-3.25 4.155-.187c27.728-1.2 49.69-11.635 63.97-27.72 14.28-16.085 21.22-37.98 17.718-63.906L184.03 182l7.25-2.5c8.066-2.768 14.73-8.15 18.814-15.53l5.28-9.564 8.626 6.72c6.39 4.976 22.988 8.397 31.375 5.968l10.28-2.97 1.564 10.595c4.3 29.362 24.393 52.534 50.06 60.155l8.25 2.438-1.75 8.437c-3.162 14.99 1.497 26.075 10.44 33.406 8.94 7.332 22.793 10.683 38.75 6.438l6.217-1.656 3.782 5.25c13.513 18.845 29.945 28.087 46.342 29.562 16.398 1.475 33.29-4.745 48.032-19.594 12.624-12.716 16.654-26.51 15.062-40.437-1.59-13.93-9.318-28.12-21.75-39.533l-8.5-7.812 9.406-6.688c7.878-5.6 10.74-15.92 8.907-25.5-1.833-9.58-7.527-16.677-16.345-17.78l-9.375-1.157 1.28-9.375c5.842-42.567-13.62-77.648-45.342-97.656-31.723-20.01-75.673-24.486-118.782-3.095l-6.72 3.344-4.717-5.876c-13.464-16.796-34.023-25.768-54.033-26.782-1.43-.072-2.857-.104-4.28-.093zm-1.22 160.31c-4.003 4.804-8.867 8.724-14.25 11.782 11.968 29.99 18.83 60.783 23.033 93.532-4.555 11.237-9.676 22.38-15.5 33.437l-.157.064c-8.54-19.537-18.073-38.957-31.188-55.75-.51.607-1.035 1.218-1.563 1.812-3.628 4.088-7.652 7.838-12 11.25 12.034 15.867 21.048 34.83 29.72 54.938 7.724 43.39 6.386 91.267-2.782 134.812-26.727 5.073-55.198 15.22-88.594 30.5h252.938c-32.428-15.282-60.268-25.46-86.688-30.53-13.95-24.116-21.036-50.13-23.25-76 9.692-45.174 28.504-71.692 57-99.282-19.276 7.68-37.422 17.31-52.687 31.937.702-3.41 1.488-6.766 2.31-10.092 9.476-24.123 23.87-45.82 42.94-65.407-5.784-2.705-11.25-5.994-16.283-9.874-12.71 13.552-23.555 28.128-32.312 43.78 7.156-19.187 12.88-38.422 18.063-57.592-5.443-6.556-10.03-13.933-13.563-21.938-4.167 16.03-8.512 31.946-13.5 47.72-4.637-23.334-11.12-46.08-20.375-68.47-.438-.204-.88-.41-1.313-.625z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getStarIcon = (size:string = DEFAULT_SIZE)=> `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:  ${size}; width:${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(1,4)" style=""><path d="M256 22.017l-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getColdIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:  ${size}; width:${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(1,4)" style=""><path d="M160 36.5c-11.688 0-23 6.674-23 25.5v25h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h23v18h-23v14h7v18h-7v14h14v-23h18v81.313A32 32 0 0 1 192 432a32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 23-30.688V361h-14v21h.01c-18.926 8.673-32.01 27.74-32.01 50 0 30.482 24.518 55 55 55s55-24.518 55-55c0-22.26-13.084-41.327-32.01-50h.01V62c0-18.826-11.313-25.5-23-25.5zm87 16.273v66.73l-46-23v20.124l46 23v50.246l-13.54 27.084-30.228-1.814-2.232-1.29v27.126l9.918 15.02L201 271.02v27.126l2.232-1.29 30.227-1.813L247 322.127v50.246l-29.51 14.754c3.703 4.73 6.834 9.922 9.293 15.478L247 392.498v66.73h18v-66.73l68.266 34.133 8.05-16.1L265 372.374v-50.246l13.54-27.084 30.228 1.814 43.513 25.123-5.11 85.172 17.97 1.078 4.57-76.187 57.79 33.365 9-15.588-57.79-33.365 63.694-42.053-9.918-15.02-71.205 47.01-43.514-25.124L301.082 256l16.684-25.268 43.515-25.125 71.206 47.012 9.918-15.022-63.693-42.053 57.79-33.365-9-15.588-57.79 33.365-4.57-76.187-17.97 1.078 5.11 85.172-43.512 25.123-30.227 1.814L265 189.873v-50.246l76.316-38.158-8.05-16.1L265 119.5v-66.73h-18zm-162.5 93.82l-9 15.587 43.5 25.115v-20.783l-34.5-19.92zm34.5 58.386l-49.404 32.618 9.918 15.02L119 226.55v-21.57zm-39.486 54.4l-9.918 15.022L119 307.022v-21.57l-39.486-26.07zM119 324.706L75.5 349.82l9 15.588 34.5-19.92v-20.783zm43.11 83.943c-25.186 0-25.186 26.678-25.186 26.678s7.05-10.4 11.31-14.904c4.195-4.435 13.877-11.774 13.877-11.774z" fill="#fff" fill-opacity="1"></path></g></svg>`
export const getEyeIcon = (size:string = DEFAULT_SIZE) => `<svg xmlns="http://www.w3.org/2000/svg" style="height: ${size}; width: ${size};" viewBox="0 0 122.88 83.78"><g><path d="M95.73,10.81c10.53,7.09,19.6,17.37,26.48,29.86l0.67,1.22l-0.67,1.21c-6.88,12.49-15.96,22.77-26.48,29.86 C85.46,79.88,73.8,83.78,61.44,83.78c-12.36,0-24.02-3.9-34.28-10.81C16.62,65.87,7.55,55.59,0.67,43.1L0,41.89l0.67-1.22 c6.88-12.49,15.95-22.77,26.48-29.86C37.42,3.9,49.08,0,61.44,0C73.8,0,85.45,3.9,95.73,10.81L95.73,10.81z M60.79,22.17l4.08,0.39 c-1.45,2.18-2.31,4.82-2.31,7.67c0,7.48,5.86,13.54,13.1,13.54c2.32,0,4.5-0.62,6.39-1.72c0.03,0.47,0.05,0.94,0.05,1.42 c0,11.77-9.54,21.31-21.31,21.31c-11.77,0-21.31-9.54-21.31-21.31C39.48,31.71,49.02,22.17,60.79,22.17L60.79,22.17L60.79,22.17z M109,41.89c-5.5-9.66-12.61-17.6-20.79-23.11c-8.05-5.42-17.15-8.48-26.77-8.48c-9.61,0-18.71,3.06-26.76,8.48 c-8.18,5.51-15.29,13.45-20.8,23.11c5.5,9.66,12.62,17.6,20.8,23.1c8.05,5.42,17.15,8.48,26.76,8.48c9.62,0,18.71-3.06,26.77-8.48 C96.39,59.49,103.5,51.55,109,41.89L109,41.89z"/></g></svg>`;
export const getWingsIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:  ${size}; width:${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(1,4)" style=""><path d="M38.643 17.275L32.215 59.47c20.354 23.085 48.127 40.682 79.195 56-29.677-4.055-58.635-12.142-84.64-24.868-.292 8.613-.584 26.252.896 35.58 23.024 8.994 48.88 14.026 75.95 16.728-23.698 5.377-47.716 7.58-71.425 6.95 2.665 9.36 7.325 22.24 11.26 31.675 22.547-1.977 45.912-7.504 69.36-15.47-18.785 14.27-39.05 26.146-60.185 35.322l28.877 30.056 17.144-9.898-5.978 22.312c6.788 6.61 20.498 15.434 27.56 20.623l13.268-11.662-.338 20.2c19.91 13.99 41.056 12.083 61.15 1.718-.804 6.438-1.308 13.29-1.482 20.56C132.47 314.7 66.666 320.958 70.59 348.222l34.553 6.947-34.108 18.04c1.503 7.398 3.84 15.003 7.73 22.677L120.1 379.56 92.17 416.226c4.726 6.13 14.61 14.823 20.537 20.515l39.47-46.24-17.962 63.475c6.238 4.326 19.387 9.33 26.273 12.87l43.313-71.076-14.138 80.248c17.225 3.487 20.708 4.81 39.82 3.19l18.186-75.66 20.297 71.852c7.333-2.51 23.21-9.526 29.976-12.664l-11.794-59.3 35.372 45.14c7.232-5.076 18.943-11.587 24.316-17.328l-17.994-37.326 31.973 18.19c25.568-17.19-44.333-57.458-86.944-100.22 6.416-8.725 11.636-17.086 15.786-25.042 19.45 27.668 44.75 39.74 75.84 29.93l-1.176-21.815 16.002 14.943c7.52-4.34 15.072-10.137 22.48-16.166l-6.99-19.133 18.694 8.745c12.732-6.638 22.917-17.1 33.08-27.59-16.19-12.562-32.92-27.903-47.49-40.242 17.74 9.162 38.718 17.52 56.892 23.95 4.27-7.49 12.045-21.063 15.463-28.7-19.626-4.04-39.435-11.263-58.413-20.58 23.383 2.56 45.728 3.05 66.367-1.138 2.805-8.642 9.82-22.678 11.123-30.996-23.616 6.897-49.242 8.78-74.923 7.03 28.832-9.016 55.294-21.066 75.56-39.81L485.69 93c-84.44 76.087-173.95 30.858-210.133 83.916-5.043-1.298-10.115-1.43-14.932-.56-14.7-80.695-139.033-53.424-221.982-159.083zM293 226.155l-9.643 45.806-23.623-44.347c10.196 4.382 20.545 8.023 33.266-1.457z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getVillageIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000000" fill-opacity="1"></path><g class="" transform="translate(5,4)" style=""><path d="M109.902 35.87l-71.14 59.284h142.28l-71.14-59.285zm288 32l-71.14 59.284h142.28l-71.14-59.285zM228.73 84.403l-108.9 90.75h217.8l-108.9-90.75zm-173.828 28.75v62h36.81l73.19-60.992v-1.008h-110zm23 14h16v18h-16v-18zm265 18v10.963l23 19.166v-16.13h16v18h-13.756l.104.087 19.098 15.914h-44.446v14h78v-39h18v39h14v-62h-110zm-194.345 48v20.08l24.095-20.08h-24.095zm28.158 0l105.1 87.582 27.087-22.574v-65.008H176.715zm74.683 14h35.735v34h-35.735v-34zm-76.714 7.74L30.37 335.153H319l-144.314-120.26zm198.046 13.51l-76.857 64.047 32.043 26.704H481.63l-108.9-90.75zm-23.214 108.75l.103.086 19.095 15.914h-72.248v77.467h60.435v-63.466h50v63.467h46v-93.466H349.516zm-278.614 16V476.13h126v-76.976h50v76.977h31.565V353.155H70.902zm30 30h50v50h-50v-50z" fill="#fff" fill-opacity="1"></path></g></svg>`;
export const getWingIcon = (size:string = DEFAULT_SIZE) => `<svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: ${size}; width: ${size};"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path><g class="" transform="translate(1,4)" style=""><path d="M28.375 21.72c6.463 186.873 211.64 185.96 332.47 279.624-78.192-33.86-206.354-26.42-299.126-86.594 43.276 140.637 197.64 94.335 311 132.563-67.51-6.592-156.55 31.527-240.72 1.375 74.328 117.156 170.745 38.902 264.156 39.593-47.114 12.005-95.76 64.52-160.812 59.595 79.27 76.296 120.778 2.205 177.562-26.188-.07.084-.15.166-.22.25 2.22-1.165 4.625-2.058 7.19-2.625 1.936-.427 3.872-.658 5.78-.687 13.36-.206 25.476 9.006 28.47 22.563 1.32 5.986.66 11.957-1.532 17.218-.083-.604-.18-1.206-.313-1.812-2.682-12.156-14.718-19.84-26.874-17.156-12.156 2.683-19.84 14.72-17.156 26.875.374 1.692.945 3.277 1.656 4.78-.185-.126-.38-.244-.562-.374.558.9 1.158 1.77 1.78 2.624 1.213 1.946 2.702 3.687 4.407 5.156 7.127 7.04 16.797 11.55 27.595 12.03 23.13 1.032 42.72-16.9 43.75-40.03.837-18.794-10.812-35.25-27.625-41.313-.01-.003-.022.004-.03 0-9.58-5.346-17.946-11.836-25-19.062 16.04 7.166 35.522 3.674 48.03-10 15.627-17.084 14.46-43.592-2.625-59.22-9.736-8.904-22.52-12.34-34.625-10.5-3.198.18-6.39 1.124-9.28 2.97-8.988 5.736-11.612 17.67-5.876 26.656 5.736 8.988 17.67 11.612 26.656 5.876 4.744-3.028 7.687-7.768 8.594-12.906 2.496 11.418-2.164 23.686-12.594 30.344-13.374 8.536-31.15 4.623-39.688-8.75-2.726-4.272-4.158-8.993-4.437-13.72-.002-.03-.03-.062-.03-.093-.348-2.14-.608-4.283-.75-6.405-9.925-146.86-254.66-165.998-379.22-312.656z" fill="#fff" fill-opacity="1"></path></g></svg>`;