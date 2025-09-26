export function genEmail(prefix = 'abc', domain = 'gmail.com') {
  const randomNum = Math.floor(Math.random() * 9999) + 1; 
  return `${prefix}${randomNum}@${domain}`;
}
