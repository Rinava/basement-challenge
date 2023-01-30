const Heading = () => (
  <div className="uppercase text-[25.937vw] leading-none text-center">
    <div className="hidden md:block">
      <svg fill="none" viewBox="0 0 757 91" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M85.6425 2.18519h-25.53L43.6845 34.3752h-.666L26.9235 2.18519H.283516L31.5855 57.9072v30.858h23.31v-30.858l30.747-55.72201ZM130.123 19.7232c19.203 0 22.755 3.996 22.755 25.752s-3.552 25.752-22.755 25.752-22.755-3.996-22.755-25.752 3.552-25.752 22.755-25.752Zm-47.1748 25.752c0 37.629 7.437 44.622 47.1748 44.622 39.738 0 47.175-6.993 47.175-44.622 0-37.62901-7.437-44.622008-47.175-44.622008-39.7378 0-47.1748 6.992998-47.1748 44.622008Zm178.9498 7.77V2.18519h-23.31V53.2452c0 15.207-2.331 17.982-15.096 17.982s-15.096-2.775-15.096-17.982V2.18519h-23.31V53.2452c0 31.08 5.994 36.852 38.406 36.852s38.406-5.772 38.406-36.852Zm60.657-51.06001h-51.726V88.7652h23.31v-28.305h22.866c7.437 0 9.768 2.442 9.768 12.21 0 7.77.444 12.432 2.331 16.095h25.53v-.999c-3.552-3.996-4.44-11.544-4.44-20.313 0-10.545-4.995-13.986-14.763-16.206 11.766-2.664 15.984-7.548 15.984-17.871v-3.33c0-23.53201-4.329-27.86101-28.86-27.86101ZM294.139 42.7002v-21.645h22.422c9.768 0 11.544 1.887 11.544 10.656 0 9.102-1.776 10.989-11.544 10.989h-22.422Z"
          fill="#fff"
        />
        <path
          d="m85.6425 2.18519 1.3133.72469L88.1834.685194h-2.5409V2.18519Zm-25.53 0V.685194h-.9185l-.4175.818146 1.336.68185ZM43.6845 34.3752v1.5h.9186l.4175-.8181-1.3361-.6819Zm-.666 0-1.3416.6708.4146.8292h.927v-1.5ZM26.9235 2.18519l1.3417-.67082-.4146-.829176h-.9271V2.18519Zm-26.639984 0V.685194H-2.27959l1.25533 2.234646 1.307776-.73465ZM31.5855 57.9072h1.5v-.3925l-.1922-.3422-1.3078.7347Zm0 30.858h-1.5v1.5h1.5v-1.5Zm23.31 0v1.5h1.5v-1.5h-1.5Zm0-30.858-1.3133-.7247-.1867.3383v.3864h1.5ZM85.6425.685194h-25.53V3.68519h25.53V.685194Zm-26.866.818146L42.3485 33.6933l2.6721 1.3638 16.428-32.19005-2.6721-1.36371ZM43.6845 32.8752h-.666v3h.666v-3Zm.6757.8292L28.2652 1.51437l-2.6833 1.34164L41.6769 35.046l2.6833-1.3416ZM26.9235.685194H.283516V3.68519H26.9235V.685194ZM-1.02426 2.91984 30.2777 58.6418l2.6156-1.4693L1.5913 1.45054l-2.61556 1.4693ZM30.0855 57.9072v30.858h3v-30.858h-3Zm1.5 32.358h23.31v-3h-23.31v3Zm24.81-1.5v-30.858h-3v30.858h3Zm-.1867-30.1333 30.747-55.72202-2.6266-1.44937-30.747 55.72199 2.6266 1.4494Zm73.9142-37.4087c4.773 0 8.454.2508 11.313.9243 2.831.6669 4.762 1.7261 6.142 3.2869 1.396 1.5783 2.364 3.8218 2.97 7.1107.607 3.2951.83 7.5127.83 12.9301h3c0-5.4607-.221-9.901-.88-13.474-.66-3.5793-1.78-6.414-3.673-8.5542-1.908-2.1577-4.465-3.4572-7.701-4.2195-3.208-.7556-7.172-1.0043-12.001-1.0043v3Zm21.255 24.252c0 5.4174-.223 9.635-.83 12.9301-.606 3.2889-1.574 5.5324-2.97 7.1107-1.38 1.5608-3.311 2.62-6.142 3.2868-2.859.6736-6.54.9244-11.313.9244v3c4.829 0 8.793-.2487 12.001-1.0043 3.236-.7623 5.793-2.0618 7.701-4.2195 1.893-2.1402 3.013-4.9749 3.673-8.5542.659-3.573.88-8.0134.88-13.474h-3Zm-21.255 24.252c-4.772 0-8.453-.2508-11.313-.9244-2.83-.6668-4.762-1.726-6.142-3.2868-1.396-1.5783-2.363-3.8218-2.97-7.1107-.607-3.2951-.83-7.5127-.83-12.9301h-3c0 5.4606.221 9.901.88 13.474.66 3.5793 1.78 6.414 3.673 8.5542 1.908 2.1577 4.465 3.4572 7.701 4.2195 3.208.7556 7.172 1.0043 12.001 1.0043v-3Zm-21.255-24.252c0-5.4174.223-9.635.83-12.9301.607-3.2889 1.574-5.5324 2.97-7.1107 1.38-1.5608 3.312-2.62 6.142-3.2869 2.86-.6735 6.541-.9243 11.313-.9243v-3c-4.829 0-8.793.2487-12.001 1.0043-3.236.7623-5.793 2.0618-7.701 4.2195-1.893 2.1402-3.013 4.9749-3.673 8.5542-.659 3.573-.88 8.0133-.88 13.474h3Zm-27.4198 0c0 9.4345.4639 17.0599 1.8184 23.1715 1.3594 6.1334 3.638 10.8445 7.337 14.3405 3.6912 3.4887 8.6475 5.6257 15.0924 6.9009 6.434 1.2728 14.469 1.7091 24.427 1.7091v-3c-9.911 0-17.707-.4379-23.844-1.6521-6.126-1.2119-10.4795-3.175-13.6148-6.1382-3.1274-2.9558-5.1918-7.0484-6.4686-12.8094-1.2817-5.7827-1.7474-13.1423-1.7474-22.5223h-3Zm48.6748 46.122c9.958 0 17.993-.4363 24.427-1.7091 6.445-1.2752 11.402-3.4122 15.093-6.9009 3.699-3.496 5.977-8.2071 7.337-14.3405 1.354-6.1116 1.818-13.737 1.818-23.1715h-3c0 9.38-.466 16.7396-1.747 22.5223-1.277 5.761-3.341 9.8536-6.469 12.8094-3.135 2.9632-7.489 4.9263-13.614 6.1382-6.138 1.2142-13.934 1.6521-23.845 1.6521v3Zm48.675-46.122c0-9.4345-.464-17.0599-1.818-23.1715-1.36-6.1334-3.638-10.8445-7.337-14.34053-3.691-3.48865-8.648-5.62565-15.093-6.90085-6.434-1.272871-14.469-1.709128-24.427-1.709128V2.35319c9.911 0 17.707.43787 23.845 1.65209 6.125 1.21189 10.479 3.17496 13.614 6.13822 3.128 2.9558 5.192 7.0484 6.469 12.8094 1.281 5.7827 1.747 13.1423 1.747 22.5223h3ZM130.123-.646808c-9.958 0-17.993.436257-24.427 1.709128-6.4449 1.2752-11.4012 3.4122-15.0924 6.90085-3.699 3.49603-5.9776 8.20713-7.337 14.34053-1.3545 6.1116-1.8184 13.737-1.8184 23.1715h3c0-9.38.4657-16.7396 1.7474-22.5223 1.2768-5.761 3.3412-9.8536 6.4686-12.8094 3.1353-2.96326 7.4888-4.92633 13.6148-6.13822 6.137-1.21422 13.933-1.65209 23.844-1.65209V-.646808ZM261.898 2.18519h1.5V.685194h-1.5V2.18519Zm-23.31 0V.685194h-1.5V2.18519h1.5Zm-30.192 0h1.5V.685194h-1.5V2.18519Zm-23.31 0V.685194h-1.5V2.18519h1.5Zm78.312 51.06001V2.18519h-3V53.2452h3Zm-1.5-52.560006h-23.31V3.68519h23.31V.685194Zm-24.81 1.499996V53.2452h3V2.18519h-3Zm0 51.06001c0 3.7819-.147 6.701-.542 8.9676-.394 2.2642-1.016 3.7463-1.868 4.7615-1.677 1.9975-4.733 2.7529-11.186 2.7529v3c6.312 0 10.803-.6321 13.483-3.8239 1.326-1.5794 2.085-3.6424 2.527-6.1755.441-2.5306.586-5.661.586-9.4826h-3Zm-13.596 16.482c-6.453 0-9.51-.7554-11.187-2.7529-.852-1.0152-1.474-2.4973-1.868-4.7615-.395-2.2666-.541-5.1857-.541-8.9676h-3c0 3.8216.144 6.952.585 9.4826.442 2.5332 1.201 4.5961 2.527 6.1755 2.68 3.1918 7.172 3.8239 13.484 3.8239v-3Zm-13.596-16.482V2.18519h-3V53.2452h3Zm-1.5-52.560006h-23.31V3.68519h23.31V.685194Zm-24.81 1.499996V53.2452h3V2.18519h-3Zm0 51.06001c0 7.7962.373 14.1152 1.477 19.1888 1.108 5.094 2.974 9.0383 6.032 11.9743 3.053 2.9305 7.144 4.7126 12.427 5.7721 5.27 1.0569 11.843 1.4168 19.97 1.4168v-3c-8.079 0-14.411-.3616-19.38-1.3582-4.957-.9941-8.442-2.5974-10.939-4.9949-2.492-2.392-4.15-5.7182-5.179-10.4477-1.033-4.7499-1.408-10.8074-1.408-18.5512h-3Zm39.906 38.352c8.126 0 14.699-.3599 19.969-1.4168 5.283-1.0595 9.374-2.8416 12.427-5.7721 3.058-2.936 4.924-6.8803 6.032-11.9743 1.104-5.0736 1.478-11.3926 1.478-19.1888h-3c0 7.7438-.376 13.8013-1.409 18.5512-1.029 4.7295-2.687 8.0557-5.179 10.4477-2.497 2.3975-5.982 4.0008-10.939 4.9949-4.969.9966-11.3 1.3582-19.379 1.3582v3Zm47.337-89.41201V.685194h-1.5V2.18519h1.5Zm0 86.58001h-1.5v1.5h1.5v-1.5Zm23.31 0v1.5h1.5v-1.5h-1.5Zm0-28.305v-1.5h-1.5v1.5h1.5Zm34.965 28.305-1.334.6869.419.8131h.915v-1.5Zm25.53 0v1.5h1.5v-1.5h-1.5Zm0-.999h1.5v-.5703l-.379-.4262-1.121.9965Zm-19.203-36.519-.332-1.463-.001 2.9257.333-1.4627Zm-41.292-8.547h-1.5v1.5h1.5v-1.5Zm0-21.645v-1.5h-1.5v1.5h1.5ZM322.555.685194h-51.726V3.68519h51.726V.685194ZM269.329 2.18519V88.7652h3V2.18519h-3Zm1.5 88.08001h23.31v-3h-23.31v3Zm24.81-1.5v-28.305h-3v28.305h3Zm-1.5-26.805h22.866v-3h-22.866v3Zm22.866 0c3.646 0 5.463.6215 6.516 1.8971 1.139 1.3794 1.752 3.9254 1.752 8.8129h3c0-4.8805-.553-8.4395-2.439-10.7231-1.971-2.3875-5.038-2.9869-8.829-2.9869v3Zm8.268 10.71c0 7.7467.423 12.7564 2.497 16.7819l2.667-1.3738c-1.7-3.3005-2.164-7.6148-2.164-15.4081h-3Zm3.831 17.595h25.53v-3h-25.53v3Zm27.03-1.5v-.999h-3v.999h3Zm-.379-1.9955c-1.518-1.707-2.557-4.2869-3.2-7.6519-.64-3.3464-.861-7.317-.861-11.6646h-3c0 4.4214.222 8.6093.914 12.2281.689 3.6003 1.87 6.7924 3.905 9.0814l2.242-1.993Zm-4.061-19.3165c0-5.5109-1.312-9.4549-4.161-12.2885-2.785-2.769-6.832-4.2579-11.77-5.3802l-.665 2.9254c4.83 1.0977 8.165 2.4392 10.32 4.5821 2.089 2.0781 3.276 5.127 3.276 10.1612h3Zm-15.932-14.743c5.999-1.3582 10.361-3.339 13.195-6.5305 2.864-3.2262 3.958-7.4496 3.958-12.8035h-3c0 4.9691-1.015 8.3492-3.202 10.8118-2.217 2.4972-5.846 4.2904-11.614 5.5962l.663 2.926Zm17.153-19.334v-3.33h-3v3.33h3Zm0-3.33c0-5.9067-.27-10.7182-1.093-14.5925-.827-3.8939-2.236-6.95227-4.594-9.23925-2.353-2.28252-5.5-3.64941-9.52-4.45586-4.006-.803751-8.997-1.073396-15.153-1.073396V3.68519c6.109 0 10.858.27148 14.563 1.01479 3.691.74062 6.226 1.92673 8.021 3.66795 1.791 1.73677 2.998 4.17297 3.749 7.70907.755 3.5557 1.027 8.1099 1.027 13.9692h3Zm-57.276 12.654v-21.645h-3v21.645h3Zm-1.5-20.145h22.422v-3h-22.422v3Zm22.422 0c2.412 0 4.235.1183 5.625.4016 1.379.2812 2.222.7032 2.781 1.2301.551.5183.969 1.2716 1.245 2.491.281 1.2428.393 2.8697.393 5.0333h3c0-2.2209-.11-4.1182-.467-5.6955-.363-1.6007-.999-2.9634-2.114-4.0129-1.105-1.041-2.538-1.6388-4.239-1.9855-1.69-.3445-3.753-.4621-6.224-.4621v3Zm10.044 9.156c0 2.2484-.112 3.9417-.396 5.236-.279 1.2736-.702 2.0578-1.256 2.5933-.559.5406-1.398.9691-2.772 1.2538-1.387.2875-3.207.4059-5.62.4059v3c2.47 0 4.536-.1175 6.229-.4683 1.706-.3535 3.142-.9656 4.248-2.0345 1.111-1.074 1.743-2.4681 2.102-4.1083.355-1.6195.465-3.5753.465-5.8779h-3Zm-10.044 9.489h-22.422v3h22.422v-3Zm170.176 10.824 1.5-.0104-.011-1.4896h-1.489v1.5Zm-24.42 0v-1.5h-1.521l.021 1.5205 1.5-.0205Zm0-13.209-1.5-.0207-.021 1.5207h1.521v-1.5Zm24.42 0v1.5h1.489l.011-1.4896-1.5-.0104Zm0 11.709h-24.42v3h24.42v-3Zm-25.92 1.5205c.055 4.0219-.122 7.1034-.662 9.4849-.534 2.3515-1.401 3.9271-2.673 5.0479-1.292 1.1384-3.156 1.9444-5.94 2.4526-2.788.509-6.368.6971-10.981.6971v3c4.655 0 8.456-.1866 11.52-.7459 3.068-.5602 5.526-1.5163 7.384-3.1529 1.877-1.6542 2.987-3.8664 3.616-6.6348.621-2.7384.791-6.1088.736-10.19l-3 .0411Zm-20.256 17.6825c-9.397 0-14.21-1.0606-16.9-4.1944-1.354-1.5778-2.295-3.8246-2.884-7.1195-.59-3.2991-.805-7.52-.805-12.9381h-3c0 5.4598.214 9.897.852 13.4661.639 3.5731 1.724 6.4046 3.561 8.5453 3.693 4.3032 9.924 5.2406 19.176 5.2406v-3Zm-20.589-24.252c0-5.4182.215-9.639.805-12.9381.589-3.2949 1.53-5.5417 2.884-7.1195 2.69-3.1338 7.503-4.1944 16.9-4.1944v-3c-9.252 0-15.483.9374-19.176 5.2406-1.837 2.1407-2.922 4.9722-3.561 8.5453-.638 3.5691-.852 8.0062-.852 13.4661h3Zm20.589-24.252c4.612 0 8.193.188 10.982.6955 2.784.5067 4.649 1.3099 5.941 2.4428 1.272 1.1147 2.138 2.6801 2.671 5.0144.54 2.365.717 5.4248.662 9.4186l3 .0414c.055-4.0537-.115-7.4041-.737-10.1278-.629-2.7544-1.74-4.956-3.618-6.6025-1.857-1.6282-4.314-2.5802-7.382-3.1384-3.063-.5574-6.864-.744-11.519-.744v3Zm21.756 19.092h24.42v-3h-24.42v3Zm25.92-1.4896c.11-15.9221-1.573-26.1398-8.858-32.13744-3.619-2.97908-8.474-4.79345-14.788-5.87728-6.313-1.083711-14.214-1.457688-24.03-1.457688V2.35319c9.775 0 17.469.37527 23.522 1.41444 6.053 1.03904 10.334 2.72118 13.389 5.2366 6.063 4.99137 7.876 13.75467 7.765 29.80057l3 .0208ZM440.561-.646808c-9.82 0-17.746.43624-24.093 1.709928-6.36 1.27629-11.252 3.41565-14.894 6.90745-3.647 3.49733-5.892 8.20773-7.231 14.33763-1.334 6.1095-1.791 13.733-1.791 23.167h3c0-9.3805.458-16.742 1.722-22.5268 1.259-5.7645 3.295-9.8578 6.377-12.8123 3.087-2.96011 7.374-4.92081 13.407-6.13162 6.047-1.2134 13.731-1.65129 23.503-1.65129V-.646808ZM392.552 45.4752c0 9.434.457 17.0575 1.791 23.167 1.339 6.1299 3.584 10.8403 7.231 14.3376 3.642 3.4918 8.534 5.6312 14.894 6.9075 6.347 1.2737 14.273 1.7099 24.093 1.7099v-3c-9.772 0-17.456-.4379-23.503-1.6513-6.033-1.2108-10.32-3.1715-13.407-6.1316-3.082-2.9545-5.118-7.0479-6.377-12.8123-1.264-5.7848-1.722-13.1463-1.722-22.5268h-3Zm48.009 46.122c9.816 0 17.717-.374 24.03-1.4595 6.314-1.0857 11.171-2.9038 14.789-5.8905 7.284-6.0118 8.967-16.2568 8.857-32.2334l-3 .0208c.111 16.1024-1.702 24.8939-7.766 29.8989-3.055 2.5216-7.336 4.2069-13.388 5.2476-6.053 1.0408-13.747 1.4161-23.522 1.4161v3ZM558.169 2.18519l1.419-.48415-.346-1.015846h-1.073V2.18519Zm-37.74 0V.685194h-1.07l-.348 1.010956 1.418.48904ZM490.57 88.7652l-1.418-.489-.686 1.989h2.104v-1.5Zm25.53 0v1.5h1.134l.309-1.0917-1.443-.4083Zm4.773-16.872v-1.5h-1.135l-.309 1.0917 1.444.4083Zm34.743 0 1.427-.4602-.335-1.0398h-1.092v1.5Zm5.439 16.872-1.428.4602.335 1.0398h1.093v-1.5Zm26.64 0v1.5h2.096l-.677-1.9842-1.419.4842Zm-61.383-35.742-1.409-.5153-.737 2.0153h2.146v-1.5Zm12.099-33.078v-1.5h-1.049l-.36.9847 1.409.5153Zm.888 0 1.422-.4772-.343-1.0228h-1.079v1.5Zm11.1 33.078v1.5h2.085l-.663-1.9772-1.422.4772Zm7.77-52.338006h-37.74V3.68519h37.74V.685194ZM519.011 1.69615 489.152 88.2762l2.836.978 29.859-86.57996-2.836-.97809ZM490.57 90.2652h25.53v-3h-25.53v3Zm26.973-1.0917 4.773-16.872-2.887-.8166-4.773 16.872 2.887.8166Zm3.33-15.7803h34.743v-3h-34.743v3Zm33.315-1.0398 5.439 16.872 2.855-.9204-5.439-16.872-2.855.9204Zm6.867 17.9118h26.64v-3h-26.64v3Zm28.059-1.9842L559.588 1.70104l-2.839.96831 29.526 86.58005 2.839-.9684ZM527.72 53.5385l12.099-33.078-2.817-1.0306-12.099 33.078 2.817 1.0306Zm10.691-32.0933h.888v-3h-.888v3Zm-.534-1.0228 11.1 33.078 2.844-.9544-11.1-33.078-2.844.9544Zm12.522 31.1008h-24.087v3h24.087v-3Zm42.265-49.33801V.685194h-1.5V2.18519h1.5Zm0 86.58001h-1.5v1.5h1.5v-1.5Zm23.31 0v1.5h1.5v-1.5h-1.5Zm0-28.305v-1.5h-1.5v1.5h1.5Zm34.965 28.305-1.334.6869.419.8131h.915v-1.5Zm25.53 0v1.5h1.5v-1.5h-1.5Zm0-.999h1.5v-.5703l-.379-.4262-1.121.9965Zm-19.203-36.519-.332-1.463-.001 2.9257.333-1.4627Zm-41.292-8.547h-1.5v1.5h1.5v-1.5Zm0-21.645v-1.5h-1.5v1.5h1.5ZM644.39.685194h-51.726V3.68519h51.726V.685194ZM591.164 2.18519V88.7652h3V2.18519h-3Zm1.5 88.08001h23.31v-3h-23.31v3Zm24.81-1.5v-28.305h-3v28.305h3Zm-1.5-26.805h22.866v-3h-22.866v3Zm22.866 0c3.646 0 5.463.6215 6.516 1.8971 1.139 1.3794 1.752 3.9254 1.752 8.8129h3c0-4.8805-.553-8.4395-2.439-10.7231-1.971-2.3875-5.038-2.9869-8.829-2.9869v3Zm8.268 10.71c0 7.7467.423 12.7564 2.497 16.7819l2.667-1.3738c-1.7-3.3005-2.164-7.6148-2.164-15.4081h-3Zm3.831 17.595h25.53v-3h-25.53v3Zm27.03-1.5v-.999h-3v.999h3Zm-.379-1.9955c-1.518-1.707-2.557-4.2869-3.2-7.6519-.64-3.3464-.861-7.317-.861-11.6646h-3c0 4.4214.222 8.6093.914 12.2281.689 3.6003 1.87 6.7924 3.905 9.0814l2.242-1.993Zm-4.061-19.3165c0-5.5109-1.312-9.4549-4.161-12.2885-2.785-2.769-6.832-4.2579-11.77-5.3802l-.665 2.9254c4.83 1.0977 8.165 2.4392 10.319 4.5821 2.09 2.0781 3.277 5.127 3.277 10.1612h3Zm-15.932-14.743c5.999-1.3582 10.361-3.339 13.195-6.5305 2.864-3.2262 3.958-7.4496 3.958-12.8035h-3c0 4.9691-1.016 8.3492-3.202 10.8118-2.217 2.4972-5.846 4.2904-11.614 5.5962l.663 2.926Zm17.153-19.334v-3.33h-3v3.33h3Zm0-3.33c0-5.9067-.27-10.7182-1.093-14.5925-.827-3.8939-2.236-6.95227-4.594-9.23925-2.353-2.28252-5.5-3.64941-9.52-4.45586C655.537.954839 650.546.685194 644.39.685194V3.68519c6.109 0 10.858.27148 14.563 1.01479 3.691.74062 6.226 1.92673 8.021 3.66795 1.791 1.73677 2.998 4.17297 3.749 7.70907.755 3.5557 1.027 8.1099 1.027 13.9692h3Zm-57.276 12.654v-21.645h-3v21.645h3Zm-1.5-20.145h22.422v-3h-22.422v3Zm22.422 0c2.412 0 4.234.1183 5.625.4016 1.379.2812 2.222.7032 2.781 1.2301.551.5183.969 1.2716 1.245 2.491.281 1.2428.393 2.8697.393 5.0333h3c0-2.2209-.111-4.1182-.467-5.6955-.363-1.6007-1-2.9634-2.114-4.0129-1.106-1.041-2.538-1.6388-4.239-1.9855-1.69-.3445-3.753-.4621-6.224-.4621v3Zm10.044 9.156c0 2.2484-.112 3.9417-.396 5.236-.279 1.2736-.702 2.0578-1.256 2.5933-.559.5406-1.398.9691-2.772 1.2538-1.387.2875-3.207.4059-5.62.4059v3c2.47 0 4.536-.1175 6.229-.4683 1.706-.3535 3.142-.9656 4.248-2.0345 1.111-1.074 1.742-2.4681 2.102-4.1083.355-1.6195.465-3.5753.465-5.8779h-3Zm-10.044 9.489h-22.422v3h22.422v-3Zm67.966 47.565h-1.5v1.5h1.5v-1.5Zm23.31 0v1.5h1.5v-1.5h-1.5Zm0-67.71v-1.5h-1.5v1.5h1.5Zm26.751 0v1.5h1.5v-1.5h-1.5Zm0-18.87001h1.5V.685194h-1.5V2.18519Zm-76.59 0V.685194h-1.5V2.18519h1.5Zm0 18.87001h-1.5v1.5h1.5v-1.5Zm26.529 0h1.5v-1.5h-1.5v1.5Zm0 69.21h23.31v-3h-23.31v3Zm24.81-1.5v-67.71h-3v67.71h3Zm-1.5-66.21h26.751v-3h-26.751v3Zm28.251-1.5V2.18519h-3V21.0552h3Zm-1.5-20.370006h-76.59V3.68519h76.59V.685194Zm-78.09 1.499996V21.0552h3V2.18519h-3Zm1.5 20.37001h26.529v-3h-26.529v3Zm25.029-1.5v67.71h3v-67.71h-3Z"
          fill="#fff"
        />
      </svg>
    </div>

    <div className="md:hidden">
      <svg className="mb-4" fill="none" viewBox="0 0 337 87" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m83.575 3.242.613-1.112H58.538l-.208.41-15.032 29.454-14.725-29.45-.208-.414H1.66l.628 1.117L31.52 55.284V84.75h23.34V55.281L83.575 3.242Zm165.233-.362v-.75h-23.34v48.59c0 3.552-.137 6.333-.517 8.515-.38 2.18-.993 3.695-1.895 4.77-1.79 2.132-4.967 2.813-10.982 2.813-6.016 0-9.193-.68-10.983-2.813-.902-1.075-1.514-2.59-1.894-4.77-.38-2.182-.517-4.963-.517-8.515V2.13h-23.34v48.59c0 7.293.35 13.157 1.369 17.84 1.021 4.693 2.724 8.253 5.465 10.885 2.739 2.63 6.44 4.26 11.318 5.238 4.872.977 10.978 1.315 18.582 1.315 7.604 0 13.709-.338 18.581-1.315 4.879-.978 8.579-2.609 11.318-5.238 2.742-2.632 4.445-6.192 5.466-10.886 1.018-4.682 1.369-10.546 1.369-17.839V2.88Zm7.618-.75h-.75v82.62h23.34V58.23h20.674c3.447 0 5.423.578 6.61 2.016 1.231 1.49 1.792 4.096 1.792 8.674 0 7.268.406 11.81 2.267 15.424l.209.406h25.128V82.779l-.19-.213c-1.534-1.727-2.539-4.278-3.152-7.482-.611-3.195-.818-6.962-.818-11.052 0-5.06-1.202-8.559-3.706-11.049-1.938-1.928-4.594-3.182-7.871-4.138 4.094-1.21 7.109-2.85 9.178-5.18 2.535-2.856 3.543-6.629 3.543-11.561v-3.12c0-5.524-.253-9.976-1.01-13.536-.758-3.57-2.034-6.3-4.119-8.322-2.083-2.02-4.898-3.262-8.592-4.003-3.688-.74-8.312-.993-14.069-.993h-48.464ZM124.593 20.062c4.484 0 7.995.235 10.75.883 2.741.646 4.687 1.691 6.096 3.284 1.416 1.601 2.356 3.833 2.936 6.977.58 3.149.788 7.149.788 12.234s-.208 9.086-.788 12.234c-.58 3.144-1.52 5.376-2.936 6.977-1.409 1.593-3.355 2.638-6.096 3.283-2.755.65-6.266.884-10.75.884-4.483 0-7.994-.234-10.749-.883-2.741-.646-4.687-1.691-6.096-3.284-1.416-1.601-2.356-3.833-2.936-6.977-.58-3.148-.789-7.149-.789-12.234s.209-9.085.789-12.233c.58-3.145 1.52-5.377 2.936-6.978 1.409-1.593 3.355-2.638 6.096-3.284 2.755-.648 6.266-.883 10.749-.883ZM79.643 43.44c0 8.828.436 15.914 1.689 21.568 1.255 5.666 3.343 9.945 6.684 13.102 3.337 3.154 7.85 5.118 13.818 6.3 5.964 1.179 13.44 1.588 22.759 1.588 9.32 0 16.796-.41 22.76-1.589 5.969-1.18 10.481-3.145 13.818-6.299 3.341-3.157 5.429-7.436 6.684-13.102 1.253-5.654 1.688-12.74 1.688-21.568 0-8.828-.435-15.914-1.688-21.568-1.255-5.666-3.343-9.944-6.684-13.102-3.337-3.154-7.849-5.118-13.818-6.3-5.964-1.179-13.44-1.588-22.76-1.588-9.319 0-16.795.41-22.759 1.589-5.969 1.18-10.48 3.145-13.818 6.299-3.34 3.158-5.429 7.436-6.684 13.102-1.253 5.654-1.688 12.74-1.688 21.568Zm199.373-3.35V21.31h20.258c2.273 0 4.033.11 5.401.39 1.362.277 2.281.711 2.924 1.317.639.602 1.079 1.44 1.356 2.666.28 1.238.385 2.821.385 4.861 0 2.119-.105 3.762-.386 5.046-.279 1.273-.721 2.141-1.362 2.76-.643.623-1.559 1.064-2.92 1.346-1.366.283-3.125.394-5.398.394h-20.258Z"
          fill="#fff"
        />
      </svg>
      <svg fill="none" viewBox="0 0 343 87" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m89.12 49.57-.005-.744H64.73l.01.76c.052 3.782-.112 6.732-.636 9.041-.52 2.294-1.386 3.91-2.71 5.076-1.335 1.176-3.21 1.964-5.881 2.451-2.673.488-6.075.664-10.407.664-8.772 0-13.591-.967-16.33-4.158-1.375-1.602-2.288-3.834-2.85-6.982-.564-3.15-.766-7.152-.766-12.238 0-5.086.202-9.087.765-12.237.563-3.148 1.476-5.381 2.85-6.982 2.74-3.192 7.559-4.159 16.331-4.159 4.331 0 7.735.176 10.407.662 2.67.486 4.548 1.271 5.882 2.441 1.324 1.16 2.189 2.766 2.71 5.045.523 2.294.687 5.225.635 8.98l-.01.76h24.385l.005-.745c.104-14.945-1.502-24.2-8.06-29.6-3.267-2.69-7.691-4.361-13.55-5.367C61.652 1.233 54.294.882 45.106.882c-9.19 0-16.563.41-22.444 1.59-5.888 1.18-10.339 3.146-13.63 6.302-3.294 3.158-5.351 7.436-6.588 13.1C1.209 27.527.78 34.613.78 43.44c0 8.827.429 15.913 1.664 21.566 1.237 5.664 3.294 9.942 6.588 13.1 3.291 3.156 7.742 5.121 13.63 6.303 5.881 1.18 13.254 1.589 22.444 1.589 9.188 0 16.546-.35 22.404-1.358 5.859-1.007 10.283-2.682 13.55-5.379 6.559-5.412 8.164-14.694 8.06-29.69Zm66.887-46.932-.173-.508h-36.431l-.174.506-27.977 81.12-.343.994h25.54l.154-.546 4.318-15.262h31.438l4.929 15.288.167.52h26.555l-.339-.992-27.664-81.12Zm31.61-.508h-.75v82.62h23.34V58.23h20.674c3.448 0 5.423.578 6.611 2.016 1.23 1.49 1.791 4.096 1.791 8.674 0 7.268.406 11.81 2.267 15.424l.21.406H266.887V82.779l-.189-.213c-1.535-1.727-2.539-4.278-3.152-7.482-.611-3.195-.819-6.962-.819-11.052 0-5.06-1.201-8.559-3.705-11.049-1.939-1.928-4.595-3.182-7.872-4.138 4.094-1.21 7.11-2.85 9.178-5.18 2.535-2.856 3.543-6.629 3.543-11.561v-3.12c0-5.524-.253-9.976-1.009-13.536-.758-3.57-2.034-6.3-4.12-8.322-2.083-2.02-4.898-3.262-8.592-4.003-3.688-.74-8.311-.993-14.069-.993h-48.464ZM293.396 84v.75h23.34V21.31H341.8V2.13h-73.26v19.18h24.856V84ZM137.189 20.6l9.786 29.162h-20.453L137.189 20.6Zm73.018 19.49V21.31h20.258c2.273 0 4.033.11 5.401.39 1.363.277 2.281.711 2.925 1.317.639.602 1.078 1.44 1.356 2.666.28 1.238.384 2.821.384 4.861 0 2.119-.104 3.762-.385 5.046-.279 1.273-.721 2.141-1.362 2.76-.643.623-1.56 1.064-2.92 1.346-1.367.283-3.125.394-5.399.394h-20.258Z"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  </div>
);

export default Heading;
