import UsersList from "./Five/UsersList";
import ReviewForm from "./Four/ReviewForm";
import UserProfile from "./One/UserProfile";
import Subscription from "./Seven/Subscription";
import Notification from "./Six/Notification";
import Collections from "./Three/Collections";
import JobList from "./Two/JobList";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      {/* <ReviewForm /> */}
      {/* <UsersList /> */}
      {/* <Notification /> */}
      <Subscription />
    </div>
  );
}

export default App;
