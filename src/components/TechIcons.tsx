import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 18, className = '' }) => {
  const norm = name.toLowerCase().trim();

  // Helper container to guarantee uniform dimensions and alignment
  const wrap = (children: React.ReactNode, title = name) => (
    <span 
      className={`tech-icon-inline ${className}`} 
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, flexShrink: 0 }}
      title={title}
      aria-label={title}
    >
      {children}
    </span>
  );

  // 1. React / React Native / React 19
  if (norm.includes('react') && !norm.includes('reactive')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none">
        <ellipse cx="57.65" cy="50" rx="17.25" ry="46.5" transform="rotate(30 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
        <ellipse cx="57.65" cy="50" rx="17.25" ry="46.5" transform="rotate(90 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
        <ellipse cx="57.65" cy="50" rx="17.25" ry="46.5" transform="rotate(150 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
        <circle cx="57.65" cy="50" r="9" fill="#61DAFB" />
      </svg>,
      'React'
    );
  }

  // 2. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="22" fill="#3178C6" />
        <path fill="#FFFFFF" d="M68.5 76.5h10.8c1.3 0 2.2.4 2.8 1.1.7.7 1 1.7 1 3 0 1.2-.4 2.3-1.1 3.2-.7.9-1.9 1.6-3.4 2.1-1.6.5-3.6.8-6.1.8-3.4 0-6.2-.6-8.3-1.7-2.1-1.1-3.6-2.8-4.5-5.1l7.8-4.8c.5 1.3 1.3 2.3 2.3 2.9 1 .7 2.3 1 3.8 1 1.4 0 2.4-.2 3.1-.7.7-.5 1-1.1 1-1.9 0-.7-.3-1.3-.9-1.7-.6-.4-1.7-.8-3.3-1.1l-4.7-1c-3.1-.7-5.4-1.9-6.8-3.5-1.4-1.7-2.1-3.9-2.1-6.6 0-2.3.6-4.3 1.8-6 1.2-1.7 2.9-3 5.1-3.9 2.2-.9 4.8-1.4 7.8-1.4 3.2 0 5.8.5 7.8 1.6 2 1.1 3.5 2.6 4.3 4.6l-7.4 4.5c-.5-1.1-1.2-1.9-2.1-2.4-.9-.5-2-.8-3.2-.8-1.3 0-2.3.2-3 .7-.7.5-1.1 1.1-1.1 1.9 0 .6.3 1.2.9 1.6.6.4 1.7.8 3.3 1.1l4.4.9c3.3.7 5.7 1.9 7.2 3.6 1.5 1.7 2.2 3.9 2.2 6.7 0 2.4-.6 4.6-1.9 6.4-1.3 1.9-3.2 3.3-5.6 4.3-2.4 1-5.3 1.5-8.7 1.5-4.4 0-8.1-.8-11.1-2.4-3-1.6-5.1-4.2-6.4-7.8l8.3-4.7zM24 40.5h33.8v9.4H45.7v47.2H35.1V49.9H24v-9.4z" />
      </svg>,
      'TypeScript'
    );
  }

  // 3. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="22" fill="#F7DF1E" />
        <path fill="#000000" d="M34.7 97.4c1.6 2.6 3.8 4.6 6.8 5.9 3 1.3 6.4 2 10.3 2 4.4 0 8.1-.9 11.2-2.7 3.1-1.8 5.5-4.4 7.2-7.8 1.7-3.4 2.6-7.5 2.6-12.2V41.7H60.4v40.8c0 3.1-.7 5.5-2.2 7.1-1.5 1.6-3.6 2.4-6.4 2.4-2.1 0-3.9-.5-5.3-1.5-1.4-1-2.4-2.4-3.1-4.2l-8.7 11.1zm47.9-1.9c3 3.3 7 5.8 11.9 7.4 4.9 1.6 10.3 2.4 16.2 2.4 6.3 0 11.7-.9 16.3-2.8 4.6-1.8 8.1-4.6 10.7-8.3 2.6-3.7 3.9-8.1 3.9-13.3 0-4.5-1-8.3-3.1-11.4-2.1-3.1-5-5.6-8.8-7.5-3.8-1.9-8.5-3.4-14.1-4.5-4.4-.9-7.9-1.7-10.4-2.7-2.6-.9-4.4-2-5.7-3.3-1.2-1.3-1.9-2.9-1.9-4.8 0-2.3 1-4.2 2.9-5.7 2-1.5 4.8-2.3 8.4-2.3 3.4 0 6.3.7 8.7 2.2 2.4 1.5 4.3 3.6 5.6 6.4l11.1-7.1c-2.3-4.2-5.7-7.6-10.2-10-4.5-2.4-10-3.7-16.5-3.7-6 0-11.2 1-15.6 2.9-4.4 1.9-7.8 4.7-10.3 8.3-2.5 3.6-3.7 7.9-3.7 12.8 0 4.5 1.1 8.3 3.2 11.5 2.1 3.1 5.1 5.7 8.9 7.6 3.8 1.9 8.4 3.4 13.9 4.5 4.8 1 8.5 2 11.2 3.1 2.7 1 4.7 2.3 6 3.8 1.3 1.5 2 3.3 2 5.5 0 2.6-1.1 4.7-3.2 6.3-2.1 1.6-5.3 2.4-9.5 2.4-4.8 0-8.8-1.1-12.1-3.3-3.3-2.2-5.8-5.3-7.5-9.4l-11.5 6.9z" />
      </svg>,
      'JavaScript'
    );
  }

  // 4. Next.js
  if (norm.includes('next')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="62" fill="#000000" stroke="#333333" strokeWidth="3" />
        <path d="M104.3 108.4L48.6 38.4H38.4V89.6H48.8V53.7L99.5 117.4C101.2 114.6 102.8 111.6 104.3 108.4Z" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="79.2" y="38.4" width="10.4" height="51.2" fill="#FFFFFF" />
      </svg>,
      'Next.js'
    );
  }

  // 5. Supabase
  if (norm.includes('supabase')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 109 113" fill="none">
        <path d="M63.7 110.3C59.9 114.9 52.4 112.5 52.1 106.6L48.9 49.3L97.2 49.3C104.9 49.3 109.1 58.3 104.1 64.3L63.7 110.3Z" fill="#249361" />
        <path d="M45.5 2.7C49.3-1.9 56.8 0.5 57.1 6.4L60.3 63.7L12 63.7C4.3 63.7 0.1 54.7 5.1 48.7L45.5 2.7Z" fill="#3ECF8E" />
      </svg>,
      'Supabase'
    );
  }

  // 6. Tailwind CSS
  if (norm.includes('tailwind')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <path fill="#38BDF8" d="M64 26C45.3 26 33.7 35.3 29 54c7-9.3 15.2-12.8 24.5-10.5 5.3 1.3 9.1 5.2 13.3 9.4 6.8 6.9 14.7 14.8 32.2 14.8 18.7 0 30.3-9.3 35-28-7 9.3-15.2 12.8-24.5 10.5-5.3-1.3-9.1-5.2-13.3-9.4C89.4 33.9 81.5 26 64 26zM29 67.7C10.3 67.7-1.3 77-6 95.7c7-9.3 15.2-12.8 24.5-10.5 5.3 1.3 9.1 5.2 13.3 9.4 6.8 6.9 14.7 14.8 32.2 14.8 18.7 0 30.3-9.3 35-28-7 9.3-15.2 12.8-24.5 10.5-5.3-1.3-9.1-5.2-13.3-9.4C54.4 75.6 46.5 67.7 29 67.7z" transform="translate(18, 5) scale(0.72)" />
      </svg>,
      'Tailwind CSS'
    );
  }

  // 7. Node.js
  if (norm.includes('node')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#5FA04E" d="M64 8.7L13.5 37.9v58.4L64 125.5l50.5-29.2V37.9L64 8.7zm0 13.9l38.4 22.2v44.4L64 111.4 25.6 89.2V44.8L64 22.6z" />
        <path fill="#5FA04E" d="M64 42.4L44.8 53.5v22.2L64 86.8l19.2-11.1V53.5L64 42.4z" />
      </svg>,
      'Node.js'
    );
  }

  // 8. PostgreSQL / Postgres
  if (norm.includes('postgres')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#336791" d="M64 9.5C33.9 9.5 9.5 33.9 9.5 64c0 30.1 24.4 54.5 54.5 54.5 30.1 0 54.5-24.4 54.5-54.5 0-30.1-24.4-54.5-54.5-54.5z" />
        <path fill="#FFFFFF" d="M64 26c-18 0-32.5 12.6-32.5 30.4 0 10.4 5 19.7 13 25.2-1.6 5.5-5.1 11.1-9.9 14.6 8.8.4 17.3-3.7 22.4-10.2 2.2.5 4.6.8 7 .8 18 0 32.5-12.6 32.5-30.4S82 26 64 26zm-8.5 24.5c3 0 5.3 2.3 5.3 5.3s-2.3 5.3-5.3 5.3-5.3-2.3-5.3-5.3 2.3-5.3 5.3-5.3zm17 0c3 0 5.3 2.3 5.3 5.3s-2.3 5.3-5.3 5.3-5.3-2.3-5.3-5.3 2.3-5.3 5.3-5.3z" />
      </svg>,
      'PostgreSQL'
    );
  }

  // 9. Python
  if (norm.includes('python')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#3776AB" d="M63.4 10.5c-27 0-25.3 11.7-25.3 11.7l.1 12.1h25.8v3.6H26.3S10.5 36 10.5 63.4c0 27.5 13.8 26.5 13.8 26.5h8.2v-11.6s-.5-13.8 13.6-13.8h23.4s13.1-.2 13.1-12.8V23.7s1.8-13.2-19.2-13.2zm-10.4 7.3c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z" />
        <path fill="#FFD438" d="M64.6 117.5c27 0 25.3-11.7 25.3-11.7l-.1-12.1H64v-3.6h37.7s15.8 1.9 15.8-25.5c0-27.5-13.8-26.5-13.8-26.5h-8.2v11.6s.5 13.8-13.6 13.8H48.5s-13.1.2-13.1 12.8v28s-1.8 13.2 19.2 13.2zm10.4-7.3c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z" />
      </svg>,
      'Python'
    );
  }

  // 10. C / C++
  if (norm.includes('c++') || norm.includes('c / c++') || norm === 'c' || norm.startsWith('c ') || norm.includes('42 málaga')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#00599C" d="M64 9.5l47.2 27.2v54.5L64 118.5 16.8 91.2V36.7L64 9.5z" />
        <path fill="#FFFFFF" d="M54 44.5c-11 0-19.8 8.9-19.8 19.5s8.8 19.5 19.8 19.5c6.5 0 12.2-3.1 15.8-7.9l-7.3-4.4c-2.2 2.7-5.1 4.3-8.5 4.3-6.6 0-11.8-5.2-11.8-11.5s5.2-11.5 11.8-11.5c3.4 0 6.3 1.6 8.5 4.3l7.3-4.4c-3.6-4.8-9.3-7.9-15.8-7.9zm27 15h4v-7h6v7h7v6h-7v7h-6v-7h-4v-6zm20 0h4v-7h6v7h7v6h-7v7h-6v-7h-4v-6z" />
      </svg>,
      'C / C++'
    );
  }

  // 11. Git & GitHub
  if (norm.includes('git') && !norm.includes('digital')) {
    if (norm.includes('github') && !norm.includes('git,')) {
      return wrap(
        <svg width={size} height={size} viewBox="0 0 98 96">
          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.25.571 12.215 1.63 9.3-6.356 13.425-5.052 13.425-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
        </svg>,
        'GitHub'
      );
    }
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#F05032" d="M124.6 57.2L70.8 3.4c-4.5-4.5-11.9-4.5-16.4 0l-51 51c-4.5 4.5-4.5 11.9 0 16.4l53.8 53.8c4.5 4.5 11.9 4.5 16.4 0l51-51c4.5-4.5 4.5-11.9 0-16.4z" />
        <path fill="#FFFFFF" d="M96.7 60.3L67.7 31.3c-2.7-2.7-7-2.7-9.7 0-2.3 2.3-2.6 5.9-1 8.5L46.8 49.9c-2.6-1.6-6.2-1.3-8.5 1-3.2 3.2-3.2 8.4 0 11.6 2.3 2.3 5.9 2.6 8.5 1l9.8 9.8c-.8 1.4-1.2 3-1.2 4.7 0 5.4 4.4 9.8 9.8 9.8s9.8-4.4 9.8-9.8c0-3.8-2.2-7.1-5.4-8.7l9.3-17.6c3.2 1.6 7.3.7 9.6-1.6 2.7-2.7 2.7-7.1 0-9.8zm-31.5 33.6c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm-23.7-33c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" />
      </svg>,
      'Git'
    );
  }

  // 12. Vite
  if (norm.includes('vite')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#BD34FE" d="M125.1 18.3L68.6 122.9c-1.8 3.3-6.5 3.3-8.3 0L1.9 20.4c-2-3.6 1.1-8 5.1-7.2l56.3 11 54.4-11.5c4.1-.9 7.3 3.6 5.4 7.2z" />
        <path fill="#41D1FF" d="M85.4 1.1L35.6 12.3c-2.7.6-4.5 3.2-4.1 6l16.1 101.4c.4 2.8 3.5 4.3 5.8 2.8L93.7 93c2.4-1.6 3.1-4.8 1.6-7.3L85.4 1.1z" />
        <path fill="#FFD427" d="M72 13l-37 57.5h27.4l-6.8 39.4L94.5 49H66.9L72 13z" />
      </svg>,
      'Vite'
    );
  }

  // 13. Linux
  if (norm.includes('linux')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#333333" d="M64 12c-15.5 0-25 12-25 28 0 8.5 2 17 5 22-5.5 9-11 20-11 32 0 15 10 22 21 22 5.5 0 12-2 18-2s12.5 2 18 2c11 0 21-7 21-22 0-12-5.5-23-11-32 3-5 5-13.5 5-22 0-16-9.5-28-25-28z" />
        <ellipse cx="64" cy="74" rx="20" ry="26" fill="#FFFFFF" />
        <circle cx="56" cy="36" r="3.5" fill="#FFFFFF" />
        <circle cx="57" cy="36" r="2" fill="#000000" />
        <circle cx="72" cy="36" r="3.5" fill="#FFFFFF" />
        <circle cx="71" cy="36" r="2" fill="#000000" />
        <path fill="#FFA500" d="M64 42c-5 0-8 3-8 6 0 2.5 3.5 4 8 4s8-1.5 8-4c0-3-3-6-8-6z" />
        <path fill="#FFA500" d="M38 108c-8 0-14 3-14 6 0 4 7 6 16 6 8 0 12-3 12-6 0-3-6-6-14-6zm52 0c-8 0-14 3-14 6 0 3 4 6 12 6 9 0 16-2 16-6 0-3-6-6-14-6z" />
      </svg>,
      'Linux'
    );
  }

  // 14. Terminal / Shell / Bash
  if (norm.includes('terminal') || norm.includes('shell') || norm.includes('bash')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#1E1E24" />
        <circle cx="28" cy="28" r="6" fill="#FF5F56" />
        <circle cx="48" cy="28" r="6" fill="#FFBD2E" />
        <circle cx="68" cy="28" r="6" fill="#27C93F" />
        <path fill="#10B981" d="M32 58l22 18-22 18-7-7 13-11-13-11zM64 88h36v10H64z" />
      </svg>,
      'Terminal / Bash'
    );
  }

  // 15. PHP
  if (norm.includes('php')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <ellipse cx="64" cy="64" rx="58" ry="34" fill="#777BB4" />
        <ellipse cx="64" cy="64" rx="55" ry="31" fill="#4F5B93" />
        <path fill="#FFFFFF" d="M35 52h9.5c6.5 0 10.5 3.3 9.4 9.5-1.1 6.2-6.5 9.5-13 9.5h-5.2L32 91h-7.5L35 52zm9.3 14c3.3 0 5.5-1.6 6-4.5.5-2.9-1.2-4.5-4.5-4.5H41l-1.6 9h4.9zM62 52h7.5l-2.4 14.5h8.8L78.3 52h7.5l-6.4 39h-7.5l2.6-15.5h-8.8L63.3 91H56l6-39zm31 0h9.5c6.5 0 10.5 3.3 9.4 9.5-1.1 6.2-6.5 9.5-13 9.5h-5.2L90 91h-7.5L93 52zm9.3 14c3.3 0 5.5-1.6 6-4.5.5-2.9-1.2-4.5-4.5-4.5H99l-1.6 9h4.9z" />
      </svg>,
      'PHP'
    );
  }

  // 16. Laravel
  if (norm.includes('laravel')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#FF2D20" d="M117.8 35.4L67.5 6.2c-2.2-1.3-4.8-1.3-7 0L10.2 35.4c-2.2 1.3-3.5 3.6-3.5 6.1v58.4c0 2.5 1.3 4.9 3.5 6.1l50.3 29.2c2.2 1.3 4.8 1.3 7 0l50.3-29.2c2.2-1.3 3.5-3.6 3.5-6.1V41.5c0-2.5-1.3-4.8-3.5-6.1zM64 16.3l41.6 24.2L82.3 53.9 40.7 29.8 64 16.3zM16.7 46.4l37 21.5v43.2L16.7 89.6V46.4zm57.6 64.7V67.9l19.5-11.3 17.5 10.1v22.9L74.3 111.1z" />
      </svg>,
      'Laravel'
    );
  }

  // 17. MySQL / MariaDB
  if (norm.includes('mysql') || norm.includes('mariadb')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#00758F" d="M117 84c-3.5-4.3-8.8-7.7-14.7-9.5-8.8-2.7-18.4-1.8-26.6 2.3-12.8 6.4-23.7 15.6-36.8 20.8-7.7 3-16.1 3.5-23.9 1.1 5.3-2.7 10.2-6.2 14.4-10.4 7.6-7.6 13.1-17.1 16.6-27.3 2.5-7.4 3.7-15.1 3.4-22.9-.2-5.4-1.5-10.8-4.2-15.5C40.6 14.5 30 11.2 20.4 16.5c-4.2 2.3-7.5 5.8-9.4 10.2C8.6 32 9.2 37.8 12.2 42.6c3.1 5 8.1 8.5 13.8 9.9 8.2 2 16.6.6 24-3.5 6.7-3.7 12.4-9 16.6-15.4 1.8-2.7 3.9-5.7 6.8-7 3.3-1.5 7.1-1.2 10.4.1 6.8 2.7 11.8 8.6 14.7 15.3 4.2 9.7 4.9 20.7 2.1 30.8-1.5 5.5-4.3 10.7-8.2 15-2.7 3-6.1 5.4-9.9 7-2.9 1.2-6 1.9-9.1 2 5.5-.3 11-1.5 16-3.6 7.4-3.1 13.8-8 19-13.8 6.6-7.3 11.2-16.1 13.8-25.6.8-2.9 1.4-5.9 1.6-8.9.2-2.1.2-4.2 0-6.3 3.6 5.8 5.7 12.6 6.1 19.5.6 10.3-2.4 20.6-8.2 29.2-2.8 4.2-6.3 7.9-10.4 10.9 7.4-1.3 14.5-4.4 20.7-9 6-4.5 10.8-10.5 13.8-17.5 1.5 4.3 2.3 8.9 2.1 13.5-.3 6.3-2.5 12.4-6.3 17.5z" />
        <path fill="#F29111" d="M102.3 74.5c5.9 1.8 11.2 5.2 14.7 9.5 3.8-5.1 6-11.2 6.3-17.5.2-4.6-.6-9.2-2.1-13.5-3 7-7.8 13-13.8 17.5-1.7 1.3-3.4 2.5-5.1 4z" />
      </svg>,
      'MySQL'
    );
  }

  // 18. Java
  if (norm.includes('java') && !norm.includes('javascript')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#5382A1" d="M48.2 92.5s-6.3 3.6 4.3 4.8c12.9 1.5 19.5 1.3 33.7-1.4 0 0 4.1 2.5 8.9 4.7-27.4 11.5-62.7 1.8-46.9-8.1zM42.4 80.3s-7.1 5.3 4.7 6.4c14.4 1.4 24.3 1.7 42.9-2.3 0 0 2.9 2.8 6.4 4.5-33.7 11.7-70.1 2.7-54-8.6z" />
        <path fill="#E76F00" d="M66.7 14.8c-7.9 14.5-3.8 23 2.9 31.7 7.7 10 5.4 18.2-13.8 30.5 15.3-7.5 24.6-18 20.8-28.5-4.4-12.1-13.6-18.7-9.9-33.7zM78.6 34.6c4.5 5.8 5.6 11.6 3.4 17.6-4.9 13.4-18.6 19.4-27.2 28.5 18-8.8 28.8-19.4 30.3-29.4 1.2-8.2-1.9-12.9-6.5-16.7zM60.5 48.2c-5.5 8.8-12.6 14.8-19.7 20.9 14-6.3 25-14.8 23.3-24.6-.9-5.1-4.7-8.9-8.4-12.6 3.6 4.5 6.7 9.8 4.8 16.3z" />
      </svg>,
      'Java'
    );
  }

  // 19. C#
  if (norm.includes('c#')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#9B4993" d="M64 9.5l47.2 27.2v54.5L64 118.5 16.8 91.2V36.7L64 9.5z" />
        <path fill="#FFFFFF" d="M52 44c-11 0-20 9-20 20s9 20 20 20c6.6 0 12.5-3.2 16.2-8.2l-7.5-4.5c-2.3 2.8-5.3 4.5-8.7 4.5-6.6 0-12-5.4-12-11.8s5.4-11.8 12-11.8c3.4 0 6.4 1.7 8.7 4.5l7.5-4.5C64.5 47.2 58.6 44 52 44zm27 9h4l-1.5 6h6l1.5-6h4l-1.5 6h5v4h-6l-1.8 7h6v4h-7l-1.5 6h-4l1.5-6h-6l-1.5 6h-4l1.5-6h-5v-4h6l1.8-7h-6v-4h7l1.5-6zm4 10l-1.8 7h6l1.8-7h-6z" />
      </svg>,
      'C#'
    );
  }

  // 20. HTML5
  if (norm.includes('html')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#E34F26" d="M19.2 110.8L9.5 2.1h109l-9.7 108.7-44.8 12.4-44.8-12.4z" />
        <path fill="#EF652A" d="M64 113.1l36.5-10.1 8.1-91H64v101.1z" />
        <path fill="#EBEBEB" d="M64 49.7H47.4l-1.1-12.8H64V24.5H32.6l3.5 37.6H64V49.7zm0 33.6l-.1.1-15.3-4.1-1-11h-12.5l1.9 21.6L64 97.9V83.3z" />
        <path fill="#FFFFFF" d="M64 49.7v12.4h15.6l-1.5 16.5L64 82.7v14.6l26.9-7.5 3.5-39.7H64V49.7zm0-25.2v12.4h31.7l1.1-12.4H64z" />
      </svg>,
      'HTML5'
    );
  }

  // 21. CSS3
  if (norm.includes('css')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#1572B6" d="M19.2 110.8L9.5 2.1h109l-9.7 108.7-44.8 12.4-44.8-12.4z" />
        <path fill="#33A9DC" d="M64 113.1l36.5-10.1 8.1-91H64v101.1z" />
        <path fill="#EBEBEB" d="M64 49.7H47.4l-1.1-12.8H64V24.5H32.6l3.5 37.6H64V49.7zm0 48.2l-27-7.5-1.9-21.6h12.5l1 11 15.4 4.1V97.9z" />
        <path fill="#FFFFFF" d="M64 49.7h16.7l1.1-12.8H64V24.5h31.4l-3.5 37.6H64V49.7zm0 48.2V83.3l15.4-4.1 1.6-17.7H93.5l-3.5 39.2-26 7.5z" />
      </svg>,
      'CSS3'
    );
  }

  // 22. Android / Android Studio
  if (norm.includes('android')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#3DDC84" d="M37.8 38.6L27.6 21c-1.3-2.2-.4-5 1.8-6.3 2.2-1.3 5-.4 6.3 1.8l10.5 18.2C51.6 32.2 57.6 31 64 31s12.4 1.2 17.8 3.7L92.3 16.5c1.3-2.2 4.1-3.1 6.3-1.8 2.2 1.3 3.1 4.1 1.8 6.3L90.2 38.6C103.3 46.8 112 60.9 112 77H16c0-16.1 8.7-30.2 21.8-38.4zM40 59c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm48 0c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" />
        <rect x="16" y="83" width="96" height="38" rx="8" fill="#3DDC84" />
      </svg>,
      'Android'
    );
  }

  // 23. WordPress
  if (norm.includes('wordpress')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="58" fill="#21759B" />
        <path fill="#FFFFFF" d="M16 64c0 19.3 11.5 35.9 28 43.6L20.4 43.2C17.6 49.5 16 56.6 16 64zm74.7-2.6c0-6-2.2-10.2-4-13.5-2.5-4.2-4.8-7.8-4.8-12 0-4.7 3.6-9.1 8.6-9.1.4 0 .7 0 1.1.1C82.1 20.7 73.5 17 64 17 48.7 17 35.3 24.8 27.5 36.8c1.3 0 2.6.1 3.7.1 6 0 15.3-.8 15.3-.8 3.1-.2 3.5 4.3.4 4.7 0 0-3.1.4-6.6.5l20.9 62.3 12.6-37.7-9-24.6c-3.1-.2-6-.5-6-.5-3.1-.2-2.7-4.8.4-4.7 0 0 9.5.8 15.2.8 6 0 15.3-.8 15.3-.8 3.1-.2 3.5 4.3.4 4.7 0 0-3.1.4-6.6.5l20.7 61.6 5.7-19.1c2.4-7.8 4.2-13.4 4.2-18.3zm-27.1 9.4l-17.2 50c4.1 1.2 8.4 1.8 12.9 1.8 5.4 0 10.6-.9 15.4-2.5l-11.1-49.3zm38.1-23.7c.6 3.1.9 6.5.9 10.3 0 7.3-1.4 15.4-5.5 25.8l-17 49.2c16-8.2 27-24.6 27-43.6 0-16.1-8-30.3-20.2-39.1-.1-.8-.2-1.7-.2-2.6z" />
      </svg>,
      'WordPress'
    );
  }

  // 24. WooCommerce
  if (norm.includes('woocommerce')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="24" fill="#96588A" />
        <path fill="#FFFFFF" d="M28.4 51.2c2.4-7.5 7.8-13.1 15-15.6 10-3.5 20.6.2 26 8.9 4.3-6.9 11.5-10.4 19.6-9.6 10.4 1 18.6 9.4 19.6 19.8 1.4 14.5-8.5 26.6-22.3 27.2-5.4.2-10.5-1.4-14.7-4.4l-11.8 17c-2 2.9-6.3 3.3-8.8.8l-10-10.2c-7.9-8.1-13.9-20.9-12.6-33.9zm32.8 16.5c2.7 2 6 3 9.4 2.8 7.3-.4 13.2-6.5 12.8-13.8-.4-6.8-6.1-12.2-12.9-12-6.9.2-12.4 5.9-12.1 12.8.1 3.8 1.4 7.3 2.8 10.2zm-23.7-2.3c-.6 6.3 3.8 12.2 10.1 13.5l5.3-7.6c-1.4-2.5-2.2-5.4-2.3-8.4-.2-6.3 3.6-11.8 9.3-13.6-2.6-2.3-6-3.6-9.8-3.3-6.9.5-12.1 6.5-12.6 19.4z" />
      </svg>,
      'WooCommerce'
    );
  }

  // 25. Unity
  if (norm.includes('unity')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="24" fill="#202020" />
        <path fill="#FFFFFF" d="M106 58L90 42l-14 7-1.5 3 9.5 9.5H62v-6l7.5-13-11.5-6.5-11.5 6.5 7.5 13v6H34l9.5-9.5-1.5-3-14-7L12 58l7.5 13 14-7 1.5 3-9.5 9.5H46v6l-7.5 13 11.5 6.5 11.5-6.5-7.5-13v-6h19.5l-9.5 9.5 1.5 3 14 7 16-16-7.5-13-14 7-1.5-3 9.5-9.5H68v-6l7.5-13-11.5-6.5-11.5 6.5 7.5 13v6H40" />
      </svg>,
      'Unity'
    );
  }

  // 26. AI / OpenAI / LLMs
  if (norm.includes('ia') || norm.includes('llm') || norm.includes('ai') || norm.includes('inteligencia')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="24" fill="#10A37F" />
        <path fill="#FFFFFF" d="M100.9 54.3c-.8-6.1-4.7-11.3-10.3-13.8l-1.9-.9V34c0-7.8-6.3-14.1-14.1-14.1-2.9 0-5.6.9-7.9 2.4l-4.7 2.7-4.7-2.7c-2.3-1.5-5-2.4-7.9-2.4-7.8 0-14.1 6.3-14.1 14.1v5.6l-1.9.9c-5.6 2.5-9.5 7.7-10.3 13.8-1 6.7 1.5 13.4 6.6 17.6l-2.4 4.1c-3.9 6.7-2.4 15.3 3.5 20.3 3.5 3 8 4.6 12.6 4.6 2.1 0 4.3-.4 6.3-1.2l4.7-1.9 4.7 1.9c2 1 4.2 1.4 6.3 1.4 4.6 0 9.1-1.6 12.6-4.6 5.9-5 7.4-13.6 3.5-20.3l-2.4-4.1c5.1-4.2 7.6-10.9 6.6-17.6zm-36.9-25c2.4 0 4.7.9 6.4 2.5l-7.7 4.5-9.3-5.4c3-1 6.4-1.6 10.6-1.6zm-17.8 8.8l7.6 4.4v9l-7.6-4.4c-1.8-1-3-2.9-3-5s1.2-4 3-5zm-6.7 25.5c.7-2 2.2-3.6 4.1-4.4l7.6 4.4v9l-7.7 4.5c-2.1-1.3-3.6-3.4-4-5.9v-7.6zm14.4 29.8c-2.4 0-4.7-.9-6.4-2.5l7.7-4.5 9.3 5.4c-3 1-6.4 1.6-10.6 1.6zm17.8-8.8l-7.6-4.4v-9l7.6 4.4c1.8 1 3 2.9 3 5s-1.2 4-3 5zm6.7-25.5c-.7 2-2.2 3.6-4.1 4.4l-7.6-4.4v-9l7.7-4.5c2.1 1.3 3.6 3.4 4 5.9v7.6zm-14.4-6.3l-8.5-4.9 8.5-4.9 8.5 4.9-8.5 4.9z" />
      </svg>,
      'IA / LLMs'
    );
  }

  // 27. Discord
  if (norm.includes('discord')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="24" fill="#5865F2" />
        <path fill="#FFFFFF" d="M96.7 36.5C89.5 33.2 81.8 30.8 73.8 29.5c-.9 1.6-2 3.8-2.7 5.5-8.5-1.3-17-1.3-25.3 0-.7-1.7-1.8-3.9-2.7-5.5-8 1.3-15.7 3.7-22.9 7-14.6 21.8-18.6 43-16.6 63.9 9.7 7.2 19.1 11.5 28.3 14.4 2.3-3.1 4.3-6.4 6-9.9-3.4-1.3-6.5-2.9-9.5-4.9.8-.6 1.6-1.2 2.4-1.8 18.4 8.5 38.4 8.5 56.6 0 .8.6 1.6 1.2 2.4 1.8-3 2-6.2 3.6-9.5 4.9 1.7 3.5 3.7 6.8 6 9.9 9.3-2.8 18.7-7.2 28.4-14.4 2.4-24.1-4-45-16.7-63.8zm-46.3 43.8c-5.5 0-10-5.1-10-11.3s4.4-11.3 10-11.3c5.6 0 10.1 5.1 10 11.3 0 6.2-4.4 11.3-10 11.3zm26.6 0c-5.5 0-10-5.1-10-11.3s4.4-11.3 10-11.3c5.6 0 10.1 5.1 10 11.3 0 6.2-4.4 11.3-10 11.3z" />
      </svg>,
      'Discord.js'
    );
  }

  // 28. FFmpeg
  if (norm.includes('ffmpeg')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#007808" />
        <path fill="#FFFFFF" d="M18 24h92v16H34v20h64v16H34v28H18V24zm46 36l30 38H76l-18-24 6-14z" />
      </svg>,
      'FFmpeg'
    );
  }

  // 29. VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <path fill="#007ACC" d="M94.6 123.6c3.2 1.5 7 .9 9.6-1.5l20-18.4c2.5-2.3 3.8-5.6 3.8-9V33.3c0-3.4-1.3-6.7-3.8-9l-20-18.4c-2.6-2.4-6.4-3-9.6-1.5-3.2 1.5-5.2 4.7-5.2 8.2v4.8L47.7 54.9l-26-20.2c-2.3-1.8-5.5-1.9-8-.4L2.8 41.3c-2.8 1.8-3.4 5.6-1.4 8.2l20.4 26.5L1.4 102.5c-2 2.6-1.4 6.4 1.4 8.2l10.9 7c2.5 1.5 5.7 1.4 8-.4l26-20.2 41.7 37.5v4.8c0 3.5 2 6.7 5.2 8.2zm0-85.3L61.7 64 94.6 89.7V38.3z" />
      </svg>,
      'VS Code'
    );
  }

  // 30. npm
  if (norm.includes('npm')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#CB3837" />
        <path fill="#FFFFFF" d="M19.2 19.2v89.6h44.8V41.6h22.4v67.2h22.4V19.2H19.2z" />
      </svg>,
      'npm'
    );
  }

  // 31. Django
  if (norm.includes('django')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#092E20" />
        <path fill="#FFFFFF" d="M62 31h13v43.7c0 8.5-3.3 14.8-9.8 18.8-6.6 4-15.5 4.5-23.7 2.7l3.5-10.8c5.4 1.3 10.4 1.2 13.5-1 3.2-2.2 4.5-5.9 4.5-10.7V31zm24 16.5h13v29.3c0 7.5 1.5 12.5 4.4 15.2l-10.3 6.8c-4.7-4.4-7.1-11.7-7.1-22V47.5zm0-16.5h13v11H86V31z" />
      </svg>,
      'Django'
    );
  }

  // 32. Expo
  if (norm.includes('expo')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="24" fill="#000020" />
        <path fill="#FFFFFF" d="M37.8 75.8c-2.8 0-5.3-1.6-6.4-4.2-1.1-2.5-.7-5.5 1.1-7.6l28.7-33.8c1.6-1.9 4-3 6.5-3s4.9 1.1 6.5 3l28.7 33.8c1.8 2.1 2.2 5.1 1.1 7.6-1.1 2.6-3.6 4.2-6.4 4.2H37.8zm29.9-31.5L44.8 71.8h46.1L67.7 44.3z" />
        <circle cx="64" cy="74" r="5" fill="#4630EB" />
      </svg>,
      'Expo'
    );
  }

  // 33. Express
  if (norm.includes('express')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#252526" />
        <text x="64" y="74" fill="#FFFFFF" fontSize="36" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ex</text>
      </svg>,
      'Express'
    );
  }

  // 34. SQL / Queries / PL/SQL
  if (norm.includes('sql')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#8B5CF6" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>,
      'SQL'
    );
  }

  // 35. Memoria / Punteros / Bajo Nivel
  if (norm.includes('memoria') || norm.includes('punteros')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#10B981" />
        <path d="M9 2v20M15 2v20M2 9h20M2 15h20" stroke="#10B981" strokeOpacity="0.4" />
        <path d="M6 18l12-12m0 0h-7m7 0v7" stroke="#34D399" strokeWidth="2.5" />
      </svg>,
      'Gestión de Memoria & Punteros'
    );
  }

  // 36. Algoritmos / Estructuras de datos
  if (norm.includes('algoritmo') || norm.includes('algoritmia') || norm.includes('estructura')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" fill="#8B5CF6" />
        <circle cx="6" cy="18" r="3" fill="#A78BFA" />
        <circle cx="18" cy="18" r="3" fill="#A78BFA" />
        <path d="M12 8v4m-6 3l4.5-3m7.5 3l-4.5-3" stroke="#C4B5FD" strokeWidth="2" />
      </svg>,
      'Algoritmia & Estructuras de Datos'
    );
  }

  // 37. Redes / TCP/IP / Hardware
  if (norm.includes('redes') || norm.includes('tcp') || norm.includes('hardware') || norm.includes('sistemas')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="2" stroke="#06B6D4" />
        <rect x="2" y="14" width="20" height="8" rx="2" stroke="#06B6D4" />
        <line x1="6" y1="7" x2="6.01" y2="7" stroke="#22D3EE" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" stroke="#22D3EE" strokeWidth="3" />
        <path d="M12 11v3" stroke="#22D3EE" strokeWidth="2" />
      </svg>,
      'Redes & Protocolos TCP/IP'
    );
  }

  // 38. APIs REST
  if (norm.includes('api')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="4" stroke="#EC4899" />
        <path d="M7 10l3 2-3 2M13 14h4" stroke="#F472B6" strokeWidth="2" />
      </svg>,
      'APIs REST'
    );
  }

  // 39. Cloud (Vercel, Render, AWS)
  if (norm.includes('cloud') || norm.includes('vercel') || norm.includes('render') || norm.includes('aws')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke="#38BDF8" />
        <path d="M12 13v5m-2-3l2-2 2 2" stroke="#0284C7" strokeWidth="2" />
      </svg>,
      'Cloud & Despliegue'
    );
  }

  // 40. Responsive / Mobile-First
  if (norm.includes('responsive') || norm.includes('mobile')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="3" stroke="#10B981" />
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="#10B981" strokeWidth="3" />
      </svg>,
      'Responsive & Mobile-First'
    );
  }

  // 41. Security / RLS
  if (norm.includes('security') || norm.includes('rls') || norm.includes('seguridad')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#10B981" />
        <path d="M9 12l2 2 4-4" stroke="#34D399" strokeWidth="2" />
      </svg>,
      'Row Level Security'
    );
  }

  // 42. Zustand / State / Hooks / Arquitectura
  if (norm.includes('zustand') || norm.includes('state') || norm.includes('hooks') || norm.includes('arquitectura')) {
    return wrap(
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#C084FC" strokeWidth="2" />
      </svg>,
      'Arquitectura & State'
    );
  }

  // Default Fallback: Clean code glyph
  return wrap(
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>,
    name
  );
};
