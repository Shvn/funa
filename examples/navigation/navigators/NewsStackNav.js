import { StackNavigator } from "react-navigation";
import NewsTabNav from "./NewsTabNav";
import NewsDetail from "../screens/NewsDetail";

const NewsStackNav = StackNavigator(
	{
		NewsTabNav: { screen: NewsTabNav },
		NewsDetail: { screen: NewsDetail }
	},
	{
		headerMode: "none"
	}
);

export default NewsStackNav;
