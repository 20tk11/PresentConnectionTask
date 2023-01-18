public class Result
{
    public string Message { get; set; }
    public double PVM { get; set; }
    
    public Result(string Message, double PVM)
    {
        this.Message = Message;
        this.PVM = PVM;
    }
}