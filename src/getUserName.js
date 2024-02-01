const DEFAULT_NAME='User name'
const getUserName=()=>{
    const arg=process.argv.slice(2);
    const itemName=arg.find((item, index, array)=>item.includes('--username='));
    if (itemName) return itemName.split('=')[1];
    return DEFAULT_NAME;
}
export default getUserName;