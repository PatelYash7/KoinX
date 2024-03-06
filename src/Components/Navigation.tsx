function Navigation() {
  return (
    <div className="flex items-center justify-start gap-8 mt-4 bg-transparent border-b">
        <div className="text-base font-semibold text-[#0141CF] border-b-[3px] border-b-[#0052FE] py-2">Overview</div>

        {['Fundamentals','News Insights','Sentiments','Team','Technicals',
        'Tokenomics'].map((item,key)=>{
            return <div key={key} className="text-base font-medium text-[#3E424A] py-2">{item}</div>
        })
        
        }
    </div>
  )
}

export default Navigation