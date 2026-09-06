import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "white";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-teal-dark border border-transparent",
  secondary:
    "bg-white text-brand-teal border border-brand-teal hover:bg-brand-mint-light",
  white: "bg-white text-brand-teal-deep border border-transparent hover:bg-brand-mint-light",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-11 text-[15px] font-semibold transition-all duration-200 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-brand-teal";

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    icon,
    iconPosition = "right",
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
