type WelcomeMsgProps = {
    name: string;
    className: string;
};
  
const WelcomeMsg = ({ name, className }: WelcomeMsgProps) => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 17) {
        return 'Good Afternoon';
      } else if (currentHour >= 17 && currentHour < 21) {
        return 'Good Evening';
      } else {
        return 'Good Night';
      }
    };
  
    return (
        <h1 className={className}>
            👋🏼 {getCurrentGreeting()}, <span className="text-blue-500 font-bold capitalize">{name}</span>!
        </h1>
    );
};
  
export default WelcomeMsg;