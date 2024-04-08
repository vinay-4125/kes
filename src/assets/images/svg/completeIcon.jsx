import { useTheme } from "@emotion/react";
export const CompleteIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill={theme.primary.green} />
      <path
        d="M20.8811 10.4415C21.0244 10.5807 21.1382 10.7462 21.2158 10.9283C21.2934 11.1105 21.3333 11.3058 21.3333 11.5031C21.3333 11.7004 21.2934 11.8957 21.2158 12.0779C21.1382 12.2601 21.0244 12.4255 20.8811 12.5648L13.705 19.5592C13.5622 19.6989 13.3924 19.8098 13.2055 19.8854C13.0186 19.9611 12.8182 20 12.6158 20C12.4134 20 12.213 19.9611 12.0261 19.8854C11.8392 19.8098 11.6695 19.6989 11.5266 19.5592L8.45117 16.5616C8.30813 16.4221 8.19467 16.2566 8.11726 16.0745C8.03984 15.8923 8 15.6971 8 15.4999C8 15.3027 8.03984 15.1075 8.11726 14.9254C8.19467 14.7432 8.30813 14.5777 8.45117 14.4383C8.59421 14.2988 8.76402 14.1883 8.95091 14.1128C9.13779 14.0373 9.3381 13.9985 9.54039 13.9985C9.74267 13.9985 9.94298 14.0373 10.1299 14.1128C10.3168 14.1883 10.4866 14.2988 10.6296 14.4383L12.6171 16.373L18.7052 10.4377C18.8482 10.2986 19.018 10.1883 19.2049 10.1132C19.3917 10.0381 19.5918 9.99965 19.7939 10C19.996 10.0004 20.196 10.0395 20.3826 10.1153C20.5691 10.191 20.7385 10.3019 20.8811 10.4415Z"
        fill="white"
      />
    </svg>
  );
};
