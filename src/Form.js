import React from 'react';
import { useForm } from 'react-hook-form';
import logo from './assets/Dungeons-and-Dragons-Logo.jpg';
import map from './assets/dndmap.jpg'

const StatsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <div style={{ backgroundImage: `url(${map})`}} className='bgMap'>
    <div className='flex justify-center border-4 border-red-300 py-4'>
    <div className='items-center m-4 '>
        <img src={logo} alt='logo' className='object-scale-down h-40 border-8 border-red-700'/>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}> 
    
            <input className='rounded-t-3xl rounded-b-3xl text-center mt-10 m-4 p-6 border-red-700 border-4 rounded-lg w-full max-w-4xl h-12 appearance-none leading-tight bg-white text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Character Name" {...register("CharacterName", {required: true, maxLength: 20})} />
            <div className='rounded-t-3xl rounded-b-3xl border-4 border-red-700 bg-white container p-6 m-4 w-full max-w-4xl mt-10 grid grid-cols-3 place-items-center gap-6'>
                <select className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="number" placeholder="Class" {...register("Class", {required: true})}>
                    <option>Class...</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                </select>
                <input className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="number" placeholder="Level" {...register("Level", {required: true, max: 20})} />
                <select className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Background" {...register("Background", {required: true, maxLength: 20})}>
                    <option>Background...</option>
                    <option value="Acolyte">Acolyte</option>
                    <option value="Charlatan">Charlatan</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Entertainer">Entertainer</option>
                    <option value="FolkHero">Folk Hero</option>
                    <option value="Gladiator">Gladiator</option>
                    <option value="GuildArtisan">Guild Artisan</option>
                    <option value="GuildMerchant">Guild Merchant</option>
                    <option value="Hermit">Hermit</option>
                    <option value="Knight">Knight</option>
                    <option value="Noble">Noble</option>
                    <option value="Outlander">Outlander</option>
                    <option value="Pirate">Pirate</option>
                    <option value="Sage">Sage</option>
                    <option value="Sailor">Sailor</option>
                    <option value="Soldier">Soldier</option>
                    <option value="Spy">Spy</option>
                    <option value="Urchin">Urchin</option>
                </select>
                <input className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="PlayerName" {...register("PlayerName", {required: true, maxLength: 30})} />             
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Faction", { required: false })}>
                    <option>Faction...</option>
                    <option value="Harpers">The Harpers</option>
                    <option value="LordsAlliance">The Lords Alliance</option>
                    <option value="OrderOfTheGauntlet">The Order of the Gauntlet</option>
                    <option value="EmeraldEnclav">The Emerald Enclave</option>
                    <option value="Zhentarim">The Zhentarim</option>
                </select>
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Race", { required: true })}>
                    <option>Race...</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="HalfElf">Half-Elf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="HalfOrc">Half-Orc</option>
                    <option value="Human">Human</option>
                    <option className='text-center' value="Tiefling">Tiefling</option>
                </select>
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none mb-2 h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Alignment", { required: true })}>
                    <option>Alignment...</option>
                    <option value="LawfulGood">Lawful Good</option>
                    <option value="NeutralGood">Neutral Good</option>
                    <option value="ChaoticGood">Chaotic Good</option>
                    <option value="LawfulNeutral">Lawful Neutral</option>
                    <option value="TrueNeutral">True Neutral</option>
                    <option value="ChaoticNeutral">Chaotic Neutral</option>
                    <option value="LawfulEvil">Lawful Evil</option>
                    <option value="NeutralEvil">Neutral Evil</option>
                    <option value="ChaoticEvil">Chaotic Evil</option>
                </select>
                <input className='text-center border-red-700 border-4 rounded-lg w-48 mb-2 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Experience Points" {...register("XP", {required: true, maxLength: 9})} />
                <input className='text-center border-red-700 border-4 rounded-lg w-48 mb-2 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="DCI Number" {...register("DCI", {required: false, maxLength: 9})} />
            </div>
            <div className='rounded-t-3xl rounded-b-3xl bg-white border-4 border-red-700 p-6 m-4 w-full max-w-4xl mt-10 grid grid-cols-6 place-items-center'>
                <div className='h-32 text-center'>
                    <i className="fa-solid fa-dumbbell fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Strength" {...register("Strength", {required: true, maxLength: 2})} />
                </div>
                <div className='h-32 text-center'>
                    <i className="fa-solid fa-hands fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Dexterity" {...register("Dexterity", {required: true, maxLength: 2})} />
                </div>
                <div className='h-32 text-center'>
                    <i className="fa-solid fa-building-columns fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Constitution" {...register("Constitution", {required: true, maxLength: 2})} />
                </div>
                <div className='h-32 text-center'>
                    <i className="fa-solid fa-brain fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Intelligence" {...register("Intelligence", {required: true, maxLength: 2})} />
                </div>
                <div className='h-32 align-items-center text-center'>
                    <i className="fa-solid fa-book-open fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Wisdom" {...register("Wisdom", {required: true, maxLength: 2})} />
                </div>
                <div className='h-32 align-items-center text-center'>       
                    <i className="fa-solid fa-person-rays fa-2xl text-red-700"></i>
                    <input className='border-4 border-red-700 block w-32 text-center rounded-lg mt-4 h-20 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Charisma" {...register("Charisma", {required: true, maxLength: 2})} />
                </div>
            </div>
            <div className='rounded-t-3xl rounded-b-3xl bg-white border-4 border-red-700 p-6 m-4 w-full max-w-4xl mt-10 grid grid-cols-6 flex flex-row justify-evenly text-center'>
                <div className=''>
                    <input  type="checkbox" value="Acrobatics" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Acrobatics</p>
                    <p className='text-red-500 font-medium'>(Dex)</p>
                </div>
                <div>
                    <input type="checkbox" value="AnimalHandling" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Animal Handling</p>
                    <p className='text-red-500 font-medium'>(Wis)</p>
                </div>
                <div className=''>
                    <input type="checkbox" value="Arcana" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Arcana</p>
                    <p className='text-red-500 font-medium'>(Int)</p>
                </div>
                <div>
                    <input type="checkbox" value="Athletics" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Athletics</p>
                    <p className='text-red-500 font-medium'>(Str)</p>
                </div>
                <div className=''>
                    <input type="checkbox" value="Deception" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Deception</p>
                    <p className='text-red-500 font-medium'>(Cha)</p>
                </div>
                <div>
                    <input type="checkbox" value="History" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>History</p>
                    <p className='text-red-500 font-medium'>(Int)</p>
                </div>
                <div>
                    <input type="checkbox" value="Insight" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Insight</p>
                    <p className='text-red-500 font-medium'>(Wis)</p>
                </div>
                <div>
                    <input type="checkbox" value="Intimidation" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Intimidation</p>
                    <p className='text-red-500 font-medium'>(Cha)</p>
                </div>
                <div>
                    <input type="checkbox" value="Investigation" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Investigation</p>
                    <p className='text-red-500 font-medium'>(Int)</p>
                </div>
                <div className=''>
                    <input  type="checkbox" value="Medicine" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Medicine</p>
                    <p className='text-red-500 font-medium'>(Wis)</p>
                </div>
                <div>
                    <input type="checkbox" value="Nature" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Nature</p>
                    <p className='text-red-500 font-medium'>(Int)</p>
                </div>
                <div>
                    <input type="checkbox" value="Perception" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Perception</p>
                    <p className='text-red-500 font-medium'>(Wis)</p>
                </div>
                <div>
                    <input type="checkbox" value="Performance" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Performance</p>
                    <p className='text-red-500 font-medium'>(Cha)</p>
                </div>
                <div className=''>
                    <input type="checkbox" value="Persuasion" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Persuasion</p>
                    <p className='text-red-500 font-medium'>(Cha)</p>
                </div>
                <div>
                    <input type="checkbox" value="Religion" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Religion</p>
                    <p className='text-red-500 font-medium'>(Int)</p>
                </div>
                <div className=''>
                    <input type="checkbox" value="SleightOfHand" className='text-red-700 text-xl font-medium' {...register("Skills")}/>
                    <p className='text-red-600 font-semibold'>Slight of Hand</p>
                    <p className='text-red-500 font-medium'>(Dex)</p>
                </div>
                <div>
                    <input type="checkbox" value="Stealth" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Stealth</p>
                    <p className='text-red-500 font-medium'>(Dex)</p>
                </div>
                <div>
                    <input type="checkbox" value="Survival" className='text-red-700 text-xl font-medium'{...register("Skills")} />
                    <p className='text-red-600 font-semibold'>Survival</p>
                    <p className='text-red-500 font-medium'>(Wis)</p>
                </div>
                
            </div>
            <div className='grid place-items-center '>
            <input type="submit" value="SUBMIT" className=' font-bold text-center text-xl text-white border-red-700 border-4 rounded-lg bg-red-700 p-2 w-40'/>
            </div>
            <input className='text-xl  font-medium text-black' value="yes" type="radio" {...register("Skills")}  />
            

    </form>
    </div>
    </div>
    </>
  );
}

export default StatsForm;