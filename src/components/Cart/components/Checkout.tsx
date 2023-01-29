import {motion, useSpring, useTransform} from "framer-motion";

import Actionable from "../../commons/Actionable";

const Checkout = () => {
  const value = useSpring(0, {stiffness: 300, damping: 30});
  const percentage = useTransform(value, (value) => `${value}%`);

  const handleCheckoutHover = (state: boolean) => {
    state ? value.set(100) : value.set(0);
  };

  return (
    <Actionable
      action={() => {}}
      className="w-full py-4"
      onMouseEnter={() => handleCheckoutHover(true)}
      onMouseLeave={() => handleCheckoutHover(false)}
    >
      <svg className="w-full" fill="none" viewBox="0 0 341 42" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask fill="#fff" height="42" id="hover" width="341" x="0" y="0">
            <motion.rect fill="#fff" height="100%" style={{width: percentage}} x="0" y="0" />
          </mask>
        </defs>
        <path
          d="m41.66 24.109-.003-.497H30.094l.007.507c.024 1.742-.052 3.089-.29 4.136-.236 1.038-.623 1.75-1.203 2.262-.587.517-1.422.873-2.64 1.095-1.22.223-2.779.304-4.775.304-4.057 0-6.208-.453-7.421-1.866-.61-.71-1.024-1.71-1.28-3.149-.258-1.44-.351-3.276-.351-5.621 0-2.345.093-4.181.35-5.621.258-1.439.671-2.44 1.281-3.15 1.213-1.412 3.364-1.865 7.42-1.865 1.997 0 3.557.081 4.776.303 1.218.222 2.054.577 2.641 1.091.58.508.967 1.217 1.202 2.247.238 1.04.314 2.378.29 4.108l-.007.507h11.563l.004-.496c.047-6.892-.687-11.238-3.777-13.782-1.537-1.265-3.608-2.043-6.325-2.51-2.717-.466-6.124-.628-10.366-.628-4.245 0-7.66.189-10.39.737-2.734.548-4.819 1.464-6.366 2.948-1.55 1.486-2.51 3.492-3.085 6.125C.778 13.919.58 17.204.58 21.28c0 4.077.197 7.36.77 9.986.576 2.633 1.536 4.64 3.086 6.125 1.547 1.483 3.632 2.4 6.366 2.949 2.73.547 6.145.736 10.39.736 4.242 0 7.649-.162 10.366-.629 2.717-.467 4.789-1.247 6.326-2.515 3.09-2.55 3.823-6.908 3.776-13.823ZM47.999 40v.5h11.08V25.716h14.36V40.5h11.08V2.06h-11.08v14.016h-14.36V2.06h-11.08V40ZM91.873 2.06h-.5V40.5h31.672v-9.64h-20.592v-5.24h18.144v-9.16h-18.144V11.7h20.592V2.06H91.873Zm78.6 22.049-.003-.497h-11.564l.007.507c.024 1.742-.052 3.089-.29 4.136-.235 1.038-.622 1.75-1.202 2.262-.587.517-1.423.873-2.64 1.095-1.22.223-2.779.304-4.776.304-4.056 0-6.208-.453-7.421-1.866-.609-.71-1.023-1.71-1.28-3.149-.258-1.44-.351-3.276-.351-5.621 0-2.345.093-4.181.351-5.621.257-1.439.671-2.44 1.28-3.15 1.213-1.412 3.365-1.865 7.421-1.865 1.997 0 3.556.081 4.776.303 1.218.222 2.054.577 2.64 1.091.58.508.967 1.217 1.202 2.247.238 1.04.314 2.378.29 4.108l-.007.507h11.564l.003-.496c.048-6.892-.686-11.238-3.776-13.782-1.537-1.265-3.608-2.043-6.326-2.51-2.717-.466-6.123-.628-10.366-.628-4.244 0-7.659.189-10.389.737-2.734.548-4.82 1.464-6.367 2.948-1.549 1.486-2.51 3.492-3.085 6.125-.573 2.625-.771 5.91-.771 9.986 0 4.077.198 7.36.771 9.986.575 2.633 1.536 4.64 3.085 6.125 1.547 1.483 3.633 2.4 6.367 2.949 2.73.547 6.145.736 10.389.736 4.243 0 7.649-.162 10.367-.629 2.717-.467 4.788-1.247 6.325-2.515 3.09-2.55 3.824-6.908 3.776-13.823ZM176.811 40v.5h11.08V25.476h4.536l8.352 14.77.144.254H213.633l-.473-.764-11.977-19.313 11.49-17.59.505-.773H200.94l-.147.231-8.637 13.545h-4.265V2.06h-11.08V40ZM300.308 2.56v-.5h-11.08v22.58c0 1.637-.063 2.91-.237 3.903-.172.993-.448 1.663-.84 2.13-.775.923-2.168 1.243-4.951 1.243-2.784 0-4.176-.32-4.951-1.244-.392-.466-.668-1.136-.841-2.129-.173-.993-.236-2.266-.236-3.903V2.06h-11.08v22.58c0 3.369.162 6.088.635 8.266.475 2.185 1.272 3.86 2.567 5.103 1.292 1.24 3.031 2.002 5.3 2.457 2.264.454 5.094.61 8.606.61 3.512 0 6.342-.156 8.606-.61 2.269-.455 4.008-1.217 5.3-2.457 1.295-1.243 2.091-2.918 2.566-5.103.474-2.178.636-4.897.636-8.266V2.56ZM316.962 40v.5h11.08V11.22h11.568V2.06h-34.12v9.16h11.472V40Zm-78.138-29.356c2.067 0 3.673.108 4.926.404 1.245.293 2.111.763 2.734 1.467.628.71 1.054 1.71 1.319 3.147.265 1.438.361 3.273.361 5.618s-.096 4.18-.361 5.618c-.265 1.437-.691 2.436-1.319 3.147-.623.704-1.489 1.174-2.734 1.467-1.253.296-2.859.404-4.926.404-2.066 0-3.672-.108-4.926-.404-1.244-.293-2.11-.763-2.733-1.467-.628-.71-1.054-1.71-1.319-3.147-.265-1.438-.362-3.273-.362-5.618s.097-4.18.362-5.618c.265-1.437.691-2.436 1.319-3.147.623-.704 1.489-1.174 2.733-1.467 1.254-.296 2.86-.404 4.926-.404Zm-20.9 10.636c0 4.077.201 7.361.783 9.988.584 2.634 1.559 4.64 3.13 6.125 1.569 1.483 3.682 2.398 6.453 2.947 2.768.547 6.23.736 10.534.736s7.767-.189 10.534-.736c2.772-.549 4.885-1.464 6.454-2.947 1.571-1.485 2.546-3.491 3.129-6.125.583-2.627.783-5.91.783-9.988 0-4.077-.2-7.361-.783-9.988-.583-2.634-1.558-4.64-3.129-6.125-1.569-1.483-3.682-2.398-6.454-2.947-2.767-.547-6.23-.736-10.534-.736s-7.766.189-10.534.736c-2.771.549-4.884 1.464-6.453 2.947-1.571 1.485-2.546 3.491-3.13 6.125-.582 2.627-.783 5.91-.783 9.988Z"
          stroke="#fff"
        />
        <path
          d="m41.66 24.109-.003-.497H30.094l.007.507c.024 1.742-.052 3.089-.29 4.136-.236 1.038-.623 1.75-1.203 2.262-.587.517-1.422.873-2.64 1.095-1.22.223-2.779.304-4.775.304-4.057 0-6.208-.453-7.421-1.866-.61-.71-1.024-1.71-1.28-3.149-.258-1.44-.351-3.276-.351-5.621 0-2.345.093-4.181.35-5.621.258-1.439.671-2.44 1.281-3.15 1.213-1.412 3.364-1.865 7.42-1.865 1.997 0 3.557.081 4.776.303 1.218.222 2.054.577 2.641 1.091.58.508.967 1.217 1.202 2.247.238 1.04.314 2.378.29 4.108l-.007.507h11.563l.004-.496c.047-6.892-.687-11.238-3.777-13.782-1.537-1.265-3.608-2.043-6.325-2.51-2.717-.466-6.124-.628-10.366-.628-4.245 0-7.66.189-10.39.737-2.734.548-4.819 1.464-6.366 2.948-1.55 1.486-2.51 3.492-3.085 6.125C.778 13.919.58 17.204.58 21.28c0 4.077.197 7.36.77 9.986.576 2.633 1.536 4.64 3.086 6.125 1.547 1.483 3.632 2.4 6.366 2.949 2.73.547 6.145.736 10.39.736 4.242 0 7.649-.162 10.366-.629 2.717-.467 4.789-1.247 6.326-2.515 3.09-2.55 3.823-6.908 3.776-13.823ZM47.999 40v.5h11.08V25.716h14.36V40.5h11.08V2.06h-11.08v14.016h-14.36V2.06h-11.08V40ZM91.873 2.06h-.5V40.5h31.672v-9.64h-20.592v-5.24h18.144v-9.16h-18.144V11.7h20.592V2.06H91.873Zm78.6 22.049-.003-.497h-11.564l.007.507c.024 1.742-.052 3.089-.29 4.136-.235 1.038-.622 1.75-1.202 2.262-.587.517-1.423.873-2.64 1.095-1.22.223-2.779.304-4.776.304-4.056 0-6.208-.453-7.421-1.866-.609-.71-1.023-1.71-1.28-3.149-.258-1.44-.351-3.276-.351-5.621 0-2.345.093-4.181.351-5.621.257-1.439.671-2.44 1.28-3.15 1.213-1.412 3.365-1.865 7.421-1.865 1.997 0 3.556.081 4.776.303 1.218.222 2.054.577 2.64 1.091.58.508.967 1.217 1.202 2.247.238 1.04.314 2.378.29 4.108l-.007.507h11.564l.003-.496c.048-6.892-.686-11.238-3.776-13.782-1.537-1.265-3.608-2.043-6.326-2.51-2.717-.466-6.123-.628-10.366-.628-4.244 0-7.659.189-10.389.737-2.734.548-4.82 1.464-6.367 2.948-1.549 1.486-2.51 3.492-3.085 6.125-.573 2.625-.771 5.91-.771 9.986 0 4.077.198 7.36.771 9.986.575 2.633 1.536 4.64 3.085 6.125 1.547 1.483 3.633 2.4 6.367 2.949 2.73.547 6.145.736 10.389.736 4.243 0 7.649-.162 10.367-.629 2.717-.467 4.788-1.247 6.325-2.515 3.09-2.55 3.824-6.908 3.776-13.823ZM176.811 40v.5h11.08V25.476h4.536l8.352 14.77.144.254H213.633l-.473-.764-11.977-19.313 11.49-17.59.505-.773H200.94l-.147.231-8.637 13.545h-4.265V2.06h-11.08V40ZM300.308 2.56v-.5h-11.08v22.58c0 1.637-.063 2.91-.237 3.903-.172.993-.448 1.663-.84 2.13-.775.923-2.168 1.243-4.951 1.243-2.784 0-4.176-.32-4.951-1.244-.392-.466-.668-1.136-.841-2.129-.173-.993-.236-2.266-.236-3.903V2.06h-11.08v22.58c0 3.369.162 6.088.635 8.266.475 2.185 1.272 3.86 2.567 5.103 1.292 1.24 3.031 2.002 5.3 2.457 2.264.454 5.094.61 8.606.61 3.512 0 6.342-.156 8.606-.61 2.269-.455 4.008-1.217 5.3-2.457 1.295-1.243 2.091-2.918 2.566-5.103.474-2.178.636-4.897.636-8.266V2.56ZM316.962 40v.5h11.08V11.22h11.568V2.06h-34.12v9.16h11.472V40Zm-78.138-29.356c2.067 0 3.673.108 4.926.404 1.245.293 2.111.763 2.734 1.467.628.71 1.054 1.71 1.319 3.147.265 1.438.361 3.273.361 5.618s-.096 4.18-.361 5.618c-.265 1.437-.691 2.436-1.319 3.147-.623.704-1.489 1.174-2.734 1.467-1.253.296-2.859.404-4.926.404-2.066 0-3.672-.108-4.926-.404-1.244-.293-2.11-.763-2.733-1.467-.628-.71-1.054-1.71-1.319-3.147-.265-1.438-.362-3.273-.362-5.618s.097-4.18.362-5.618c.265-1.437.691-2.436 1.319-3.147.623-.704 1.489-1.174 2.733-1.467 1.254-.296 2.86-.404 4.926-.404Zm-20.9 10.636c0 4.077.201 7.361.783 9.988.584 2.634 1.559 4.64 3.13 6.125 1.569 1.483 3.682 2.398 6.453 2.947 2.768.547 6.23.736 10.534.736s7.767-.189 10.534-.736c2.772-.549 4.885-1.464 6.454-2.947 1.571-1.485 2.546-3.491 3.129-6.125.583-2.627.783-5.91.783-9.988 0-4.077-.2-7.361-.783-9.988-.583-2.634-1.558-4.64-3.129-6.125-1.569-1.483-3.682-2.398-6.454-2.947-2.767-.547-6.23-.736-10.534-.736s-7.766.189-10.534.736c-2.771.549-4.884 1.464-6.453 2.947-1.571 1.485-2.546 3.491-3.13 6.125-.582 2.627-.783 5.91-.783 9.988Z"
          fill="#fff"
          mask="url(#hover)"
        />
      </svg>
    </Actionable>
  );
};

export default Checkout;
