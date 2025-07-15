import { Link, LinkProps, useNavigate } from "react-router-dom";

export default function TransitionLink(props: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (
      "startViewTransition" in document &&
      typeof (document as any).startViewTransition === "function"
    ) {
      e.preventDefault();
      (document as any).startViewTransition(() => {
        navigate(props.to as string);
      });
    }
    // else, let Link handle navigation normally
  };

  return <Link {...props} onClick={handleClick} />;
} 