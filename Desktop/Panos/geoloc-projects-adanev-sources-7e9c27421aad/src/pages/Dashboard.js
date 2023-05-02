import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart, FiTruck, FiRefreshCw, FiCheck,} from 'react-icons/fi';
import {TiCloudStorage, TiDirections, TiMicrophoneOutline} from "react-icons/ti";
import { MdAddTask, MdCreate } from 'react-icons/md';
import CardItem from '../components/dashboard/CardItem';
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import Tooltip from "../components/tooltip/Tooltip";
import {
    Button,
    Card,
    CardBody,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHeader,
    TableRow
} from "@windmill/react-ui";
import {MdDeleteOutline, MdModeEditOutline} from "react-icons/all";
import {notifyError, notifySuccess} from "../utils/toast";
import {randomFloatOf4Digits, randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const { toggleDrawer } =  useContext(SidebarContext);

    const spin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const toggleForm = (item) => {
        setItem(item);
        toggleDrawer();
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <PageTitle>Dashboard</PageTitle>

            <MainDrawer>
                <NewItemDrawer item={item} />
            </MainDrawer>

            {loading && <Loading />}

            <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
                <CardItemTwo title="Today Order" Icon={ImStack} price={randomFloatOf6Digits()}
                             className="text-white bg-teal-500"/>
                <CardItemTwo title="This Month" Icon={FiShoppingCart} price={randomFloatOf6Digits()}
                             className="text-white bg-blue-500"/>
                <CardItemTwo title="Total Order" Icon={ImCreditCard} price={randomFloatOf6Digits()}
                             className="text-white bg-green-500"/>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <CardItem title="Total Order" Icon={FiShoppingCart} quantity={randomFloatOf4Digits()}
                          className="text-orange-600 bg-orange-100"/>
                <CardItem title="Order Pending" Icon={FiRefreshCw} quantity={randomFloatOf4Digits()} amount={100000}
                          className="text-blue-600 bg-blue-100"/>
                <CardItem title="Order Processing" Icon={FiTruck} quantity={randomFloatOf4Digits()}
                          className="text-teal-600 bg-teal-100"/>
                <CardItem title="Order Delivered" Icon={FiCheck} quantity={randomFloatOf4Digits()}
                          className="text-green-600 bg-green-100"/>
            </div>
            <Card className="mt-6">
                <CardBody>
                    <h3 className="font-ubuntu text-green-500 mb-4">Libraries used in the project</h3>
                    <TableContainer>
                        <Table>
                            <TableHeader className="font-righteous">
                                <TableRow>
                                    <TableCell className="w-48">Library</TableCell>
                                    <TableCell>Utility</TableCell>
                                    <TableCell>Link</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="font-ubuntu text-sm">
                                <TableRow>
                                    <TableCell>AWS Amplify</TableCell>
                                    <TableCell>Build Extensible, Full-Stack Web and Mobile Apps Faster. Easy to Start, Easy to Scale.</TableCell>
                                    <TableCell>
                                        <a href="https://docs.amplify.aws/start/q/integration/react/" className="text-blue-500">https://docs.amplify.aws/start/q/integration/react/</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tailwind CSS</TableCell>
                                    <TableCell>A utility-first CSS framework with predefined classes that you can use to build and design web.</TableCell>
                                    <TableCell>
                                        <a href="https://tailwindcss.com/docs" className="text-blue-500">https://tailwindcss.com/docs</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Windmill React UI</TableCell>
                                    <TableCell>A component library based on Tailwind CSS.</TableCell>
                                    <TableCell>
                                        <a href="https://windmillui.com/react-ui" className="text-blue-500">https://windmillui.com/react-ui</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>React Hook Form</TableCell>
                                    <TableCell>Performant, flexible and extensible forms with easy-to-use
                                        validation.</TableCell>
                                    <TableCell>
                                        <a href="https://react-hook-form.com/" className="text-blue-500">https://react-hook-form.com/</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>React Select</TableCell>
                                    <TableCell>A flexible and beautiful Select Input control for ReactJS with
                                        multiselect, autocomplete, async and creatable support.</TableCell>
                                    <TableCell>
                                        <a href="https://react-select.com/home" className="text-blue-500">https://react-select.com/home</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>React Icons</TableCell>
                                    <TableCell>Popular icons in your React projects easily with react-icons.</TableCell>
                                    <TableCell>
                                        <a href="https://react-icons.github.io/react-icons" className="text-blue-500">https://react-icons.github.io/react-icons</a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Color Hunt</TableCell>
                                    <TableCell>Color Palettes for Designers and Artists</TableCell>
                                    <TableCell>
                                        <a href="https://colorhunt.co/" className="text-blue-500">https://colorhunt.co/</a>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
            <Card className="mt-6">
                <CardBody>
                    <h3 className="font-ubuntu text-green-500 mb-4">Frequently used components</h3>
                    <TableContainer>
                        <Table>
                            <TableHeader className="font-righteous">
                                <TableRow>
                                    <TableCell className="w-48">Component</TableCell>
                                    <TableCell>Render</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-sm font-ubuntu font-bold">
                                <TableRow>
                                    <TableCell>Tooltip</TableCell>
                                    <TableCell className="flex gap-4">
                                        <Tooltip id="exoOne" Icon={TiCloudStorage} title="Cloud Storage"
                                                 bgColor="#159895"/>
                                        <Tooltip id="exoTow" Icon={TiDirections} title="Directions" bgColor="#DF2E38"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Buttons</TableCell>
                                    <TableCell className="flex gap-4">
                                        <Button icon={TiMicrophoneOutline} className="w-12 rounded-sm"/>
                                        <Button iconLeft={MdModeEditOutline}>Left Icon</Button>
                                        <Button iconRight={MdDeleteOutline}>Right Icon</Button>
                                        <Button layout="link">Link</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Alerts</TableCell>
                                    <TableCell className="flex gap-4">
                                        <div className="text-red-500 cursor-pointer"
                                             onClick={() => notifyError("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}>Raise
                                            Error
                                        </div>
                                        <div className="text-green-500 cursor-pointer"
                                             onClick={() => notifySuccess("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}>Raise
                                            Success
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Spinner</TableCell>
                                    <TableCell className="text-blue-500 cursor-pointer">
                                        <div onClick={spin}>Click me</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Toggle Form</TableCell>
                                    <TableCell>
                                        <Button icon={MdAddTask} onClick={() => toggleForm()}>Add Item</Button>
                                        <Button icon={MdCreate} className="ml-2" onClick={() => toggleForm({attributeUn: "Attribute 1", attributeDeux: "Attribute Deux", attributeTrois: "Attribute Trois" })}>Update Item</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </>
    );
};

export default Dashboard;
