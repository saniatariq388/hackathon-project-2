import React from 'react'
import Image from 'next/image'
import { Card } from './ui/card'
import { Coffee } from 'lucide-react';
import FoodCategory from './FoodCategory';



function StartardMenu() {
  return (
    <div>
        <div className='w-full flex flex-col gap-[120px] items-center'>
            <div className='w-[1320px] mt-[120px] flex justify-between gap-[112px]'>
                <div className='w-[448px] h-[726px] mt-[84px]'>
                    <Image src="/images/bowl.png" alt="image" width={450} height={730}></Image>
                </div>
                <div className='w-[760px] h-[115px]'>
        <div className="grid gap-8 md:grid-rows-4">
              <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee  color="orange" size={40}/>
              <h3 className="text-5xl text-black font-bold ">Starter Menu</h3>
              </div>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div>
              <h3 className="text-2xl font-bold text-[#195A00]">Alder Grilled Chinook Salmon</h3>
              <p className="mb-2 text-gray-600">Toasted French bread topped with romano, cheddar</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
              </div>
              <div className='text-4xl font-bold text-[orange]'>32$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
              <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[orange]">Berries and creme tart</h3>
              <p className="mb-2 text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
              <p className="text-4 text-sm text-black"> 700 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Tormentoso Bush Pizza Pintoage</h3>
              <p className="mb-2 text-gray-600">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-4 text-sm text-black"> 1000 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>14$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
              <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Spicy Vegan Potato Curry</h3>
              <p className="mb-2 text-gray-600">Spreadable Cream cheese, crumbled blue cheese</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
        
        </div>
      </div>      
            </div>
            <div className='w-[1320px] mt-[120px] flex justify-between gap-[112px]'>
                
                <div className='w-[760px] h-[115px]'>
        <div className="grid gap-8 md:grid-rows-4">
              <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee  color="orange" size={40}/>
              <h3 className="text-6xl text-black font-bold ">Starter Menu</h3>
              </div>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div> 
                    <h3 className="text-2xl font-bold text-[#195A00]">Alder Grilled Chinook Salmon</h3>
              <p className="mb-2 text-gray-600">Toasted French bread topped with romano, cheddar</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
              </div>
              <div className='text-4xl font-bold text-[orange]'>32$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[orange]">Berries and creme tart</h3>
              <p className="mb-2 text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
              <p className="text-4 text-sm text-black"> 700 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Tormentoso Bush Pizza Pintoage</h3>
              <p className="mb-2 text-gray-600">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-4 text-sm text-black"> 1000 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>14$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Spicy Vegan Potato Curry</h3>
              <p className="mb-2 text-gray-600">Spreadable Cream cheese, crumbled blue cheese</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
        
        </div>
      </div> 
      <div className='w-[448px] h-[726px] mt-[84px]'>
                    <Image src="/images/bowl.png" alt="image" width={450} height={730}></Image>
                </div>     
            </div>
        </div>
       <div
       className='mt-[120px]  bg-black'>
       <FoodCategory/>
       </div>
       <div className='w-full flex flex-col gap-[120px] items-center'>
            <div className='w-[1320px] mt-[120px] flex justify-between gap-[112px]'>
                <div className='w-[448px] h-[726px] mt-[84px]'>
                    <Image src="/images/cupcakes.png" alt="image" width={450} height={730}></Image>
                </div>
                <div className='w-[760px] h-[115px]'>
        <div className="grid gap-8 md:grid-rows-4">
              <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee  color="orange" size={40}/>
              <h3 className="text-5xl text-black font-bold ">Dessert</h3>
              </div>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div>
              <h3 className="text-2xl font-bold text-[#195A00]">Fig and lemon cake</h3>
              <p className="mb-2 text-gray-600">Toasted French bread topped with romano, cheddar</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
              </div>
              <div className='text-4xl font-bold text-[orange]'>32$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
              <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[orange]">Creame mascarpone cake</h3>
              <p className="mb-2 text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
              <p className="text-4 text-sm text-black"> 700 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Paastries, blueberries, lemon juice</h3>
              <p className="mb-2 text-gray-600">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-4 text-sm text-black"> 1000 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>14$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
              <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Pain au chocolat</h3>
              <p className="mb-2 text-gray-600">Spreadable Cream cheese, crumbled blue cheese</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
        
        </div>
      </div>      
            </div>
            <div className='w-[1320px] mt-[120px] flex justify-between gap-[112px]'>
                
                <div className='w-[760px] h-[115px]'>
        <div className="grid gap-8 md:grid-rows-4">
              <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee  color="orange" size={40}/>
              <h3 className="text-6xl text-black font-bold ">Drinks</h3>
              </div>
            <Card className="relative border-none p-6">
             <div className='flex justify-between'>
                <div> 
                    <h3 className="text-2xl font-bold text-[#195A00]">Caffe macchiato</h3>
              <p className="mb-2 text-gray-600">Toasted French bread topped with romano, cheddar</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
              </div>
              <div className='text-4xl font-bold text-[orange]'>32$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[orange]">Aperol Spritz Capacianno</h3>
              <p className="mb-2 text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
              <p className="text-4 text-sm text-black"> 700 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Caffe Latte Campuri</h3>
              <p className="mb-2 text-gray-600">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-4 text-sm text-black"> 1000 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>14$</div>
             </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-6">
            <div className='flex justify-between'>
                <div>
                <h3 className="text-2xl font-bold text-[#195A00]">Tormentoso BushTea Pintoage</h3>
              <p className="mb-2 text-gray-600">Spreadable Cream cheese, crumbled blue cheese</p>
              <p className="text-4 text-sm text-black"> 560 CAL</p>
                </div>
                <div className='text-4xl font-bold text-[orange]'>35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
        
        </div>
      </div> 
      <div className='w-[448px] h-[726px] mt-[84px]'>
                    <Image src="/images/drinks.png" alt="image" width={450} height={730}></Image>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default StartardMenu