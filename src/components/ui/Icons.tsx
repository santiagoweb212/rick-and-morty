
interface IIconsProps {
  icon: string;
  className: string;
}

const Icons = ({ icon, className }: IIconsProps) => {
  const selectIcon = (icon: string): JSX.Element | null => {
    switch (icon) {
      case "chevronDown":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-7 ${className}`}
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "iconStatus":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className={`w-6 h-7 ${className}`}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18.98 9.253a7.524 7.524 0 0 0-4.233-4.234a3 3 0 0 0-.534.868a6.519 6.519 0 0 1 3.9 3.9a3 3 0 0 0 .868-.534m-6.752-3.75a6.5 6.5 0 1 0 6.268 6.268c.343-.106.67-.25.976-.424a7.5 7.5 0 1 1-6.82-6.819a4.975 4.975 0 0 0-.424.976"
              clipRule="evenodd"
            />
            <circle cx="17" cy="7" r="3" fill="currentColor" />
          </svg>
        );
      case "iconGender":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`w-6 h-7 ${className}`}
          >
            <path
              fill="currentColor"
              d="M9 9c1.29 0 2.5.41 3.47 1.11L17.58 5H13V3h8v8h-2V6.41l-5.11 5.09c.7 1 1.11 2.2 1.11 3.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"
            />
          </svg>
        );
      case "iconSpecie":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            className={`w-6 h-7 ${className}`}
          >
            <circle cx="9.5" cy="2.5" r="2.5" fill="currentColor" />
            <path
              fill="currentColor"
              d="M14.434 7.33a6.407 6.407 0 0 1 1.677 4.322c0 3.582-2.951 6.488-6.59 6.488c-3.64 0-6.595-2.906-6.595-6.488c0-1.643.624-3.141 1.648-4.284L3.138 5.967a8.374 8.374 0 0 0-2.137 5.592C1 16.219 4.81 20 9.503 20s8.498-3.78 8.498-8.441a8.383 8.383 0 0 0-2.152-5.615Z"
            />
            <path
              fill="currentColor"
              d="M4.368 3.754L4.34 5.525s.22.93 1.75 1.411c1.487.468 3.581.3 5.048.964c1.273.575 1.71 1.53 1.71 1.53l.03-1.66s-.11-.876-1.285-1.239c-1.176-.362-3.141-.48-5.428-1.265c-1.025-.352-1.812-1.485-1.798-1.512Zm1.665 3.798L5.97 9.5s.16.415 1.578.826c.848.246 3.364.467 4.666.998c1.139.464 1.665 1.554 1.665 1.554l.12-1.623c-.376-.92-.81-1.148-2.342-1.544c-1.044-.27-2.24-.318-3.163-.625c-1.811-.603-2.46-1.533-2.46-1.533Z"
            />
            <path
              fill="currentColor"
              d="M14.492 3.74v1.738s-.244.807-1.556 1.295c-1.69.628-4.273.583-6.004 1.556a2.033 2.033 0 0 0-.962 1.167l.027-1.999s.3-.743 1.83-1.22c1.964-.614 3.21-.38 4.962-1.128c1.14-.487 1.716-1.395 1.703-1.409m-9.6 7.474l-.069 1.918s.301.61 1.192.99c1.703.728 2.904.193 5.405 1.332c1.129.513 1.395 1.362 1.395 1.362l-.006-1.926s-.147-.59-1.242-.953c-1.095-.362-3.488-.609-5.113-1.22c-1.117-.42-1.576-1.517-1.562-1.503"
            />
            <path
              fill="currentColor"
              d="m5.984 16.62l.027-1.837s.126-.53 1.83-1.074c1.606-.512 3.602-.502 4.537-.89c.935-.39 1.62-1.566 1.62-1.566l-.007 1.95s.049.696-1.378 1.15c-1.856.59-3.03.38-4.859 1.065c-1.036.389-1.743 1.243-1.77 1.203Zm6.896-8.851l.022 1.674s-.262.492-1.417.96c-1.573.64-3.003.278-5.007 1.133c-.748.318-1.656 1.596-1.656 1.596l.053-2.026s.539-.87 1.51-1.22c2.083-.752 2.858-.202 5.035-1.1c.736-.305 1.438-.934 1.46-1.017"
            />
          </svg>
        );
      case "iconHear":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${className}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        );
      default:
        return null; // Puedes manejar casos no reconocidos devolviendo null o un icono predeterminado.
    }
  };

  return <div>{selectIcon(icon)}</div>;
};

export default Icons;