using System;
using System.Collections.Generic;
using System.Collections;
//using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Diagnostics;

using System.Xml;

// for the random image generator
using System.IO;

public class Show
{
    public string titleName;
    public DateTime start;
    public DateTime end;
    public string djName;
    //public List<String> subGenres;
    public string genreName;
    public string shortDescription;
    public string photo;

    public static DateTime now()
    {
        string curTime = DateTime.Now.TimeOfDay.ToString();
        string curDay = DateTime.Now.DayOfWeek.ToString();
        if (curDay == "Monday")
            curDay = "2010/02/01";
        if (curDay == "Tuesday")
            curDay = "2010/02/02";
        if (curDay == "Wednesday")
            curDay = "2010/02/03";
        if (curDay == "Thursday")
            curDay = "2010/02/04";
        if (curDay == "Friday")
            curDay = "2010/02/05";
        if (curDay == "Saturday")
            curDay = "2010/02/06";
        if (curDay == "Sunday")
            curDay = "2010/02/07";
        DateTime dt = Convert.ToDateTime(curDay + " " + curTime);
        return dt;
    }
}


public partial class _Default : System.Web.UI.Page
{
    public Show show;

    public String startTime;
    public String endTime;
    public String startDay;
    public String endDay;

    public List<Show> shows = new List<Show>();
    protected void Page_Load(object sender, EventArgs e)
    {
        string showsFilePath = Server.MapPath("/radioDepaul.xml");
        ReadXML(showsFilePath);
        /*this.shows.Sort(delegate(Show a, Show b)
        {
            return a.start.CompareTo(b.end);
        });*/
    }

    public string ReadXML(string UrlToXmlFile)
    {
        // this string will concatenate all the xml values
        System.Text.StringBuilder sbXML = new System.Text.StringBuilder();
        XmlTextReader reader = null;

        try
        {
            // load the file from the URL
            reader = new XmlTextReader(UrlToXmlFile);

            //object oProvinceName = reader.NameTable.Add("Province");

            while (reader.Read())
            {
                if (reader.NodeType == XmlNodeType.Element)
                {
                    if (reader.Name.Equals("show"))
                    {
                        this.show = new Show();
                    }
                }

                if (reader.NodeType == XmlNodeType.EndElement)
                {
                    if (reader.Name.Equals("show"))
                    {
                        // set the date
                        this.show.start = Convert.ToDateTime(this.startDay + " " + this.startTime);
                        this.show.end = Convert.ToDateTime(this.endDay + " " + this.endTime);

                        this.shows.Add(this.show);
                    }
                }

                if (reader.NodeType == XmlNodeType.Element)
                {
                    if (reader.Name.Equals("titleName"))
                        this.show.titleName = reader.ReadString();
                    if (reader.Name.Equals("djName"))
                        this.show.djName = reader.ReadString();
                    //if (reader.Name.Equals("subGenre"))
                    //    this.show.subGenres.Add(reader.ReadString());
                    if (reader.Name.Equals("genreName"))
                        this.show.genreName = reader.ReadString();
                    if (reader.Name.Equals("shortDescription"))
                        this.show.shortDescription = reader.ReadString();
                    if (reader.Name.Equals("photo"))
                        this.show.photo = reader.ReadString();
                    if (reader.Name.Equals("startTime"))
                        this.startTime = reader.ReadString();
                    if (reader.Name.Equals("endTime"))
                        this.endTime = reader.ReadString();
                    if (reader.Name.Equals("startDay"))
                    {
                        this.startDay = reader.ReadString();
                        if (this.startDay == "Monday")
                            this.startDay = "2010/02/01";
                        if (this.startDay == "Tuesday")
                            this.startDay = "2010/02/02";
                        if (this.startDay == "Wednesday")
                            this.startDay = "2010/02/03";
                        if (this.startDay == "Thursday")
                            this.startDay = "2010/02/04";
                        if (this.startDay == "Friday")
                            this.startDay = "2010/02/05";
                        if (this.startDay == "Saturday")
                            this.startDay = "2010/02/06";
                        if (this.startDay == "Sunday")
                            this.startDay = "2010/02/07";
                    }
                    if (reader.Name.Equals("endDay"))
                    {
                        this.endDay = reader.ReadString();
                        if (this.endDay == "Monday")
                            this.endDay = "2010/02/01";
                        if (this.endDay == "Tuesday")
                            this.endDay = "2010/02/02";
                        if (this.endDay == "Wednesday")
                            this.endDay = "2010/02/03";
                        if (this.endDay == "Thursday")
                            this.endDay = "2010/02/04";
                        if (this.endDay == "Friday")
                            this.endDay = "2010/02/05";
                        if (this.endDay == "Saturday")
                            this.endDay = "2010/02/06";
                        if (this.endDay == "Sunday")
                            this.endDay = "2010/02/07";
                    }
                }
            }
        }
        catch (Exception e)
        {
            Response.Write(e.Message);
            return "";
        }
        finally
        {
            if (reader != null)
                reader.Close();
        }
        /*List<Show> Hals = new List<Show>();
        for (int i = 0; i < this.shows.Count-1; i++) {
            if (this.shows[i].end != this.shows[i + 1].start)
            {
                Show Hal = new Show();
                Hal.title = "HAL 2010";
                Hal.djs = "Various Artists";
                Hal.start = this.shows[i].end;
                Hal.end = this.shows[i + 1].start;
                Hal.description = "From time-to-time, HAL 2010 takes over the station. When he does, listeners will hear great new music, timeless classics, and other HAL favorites. We can’t stop HAL; we can only hope to control him.";
                Hals.Add(Hal);
            }
        }
        for (int i = 0; i < Hals.Count; i++)
        {
            this.shows.Add(Hals[i]);
        }*/

        return "";
    }

    /// <summary>
    /// Count the number of lines in the file specified.
    /// </summary>
    /// <param name=f>The filename to count lines in.</param>
    /// <returns>The number of lines in the file.</returns>
    static int CountLinesInFile(string f)
    {
        int count = 0;
        using (StreamReader r = new StreamReader(f))
        {
            string line;
            while ((line = r.ReadLine()) != null)
            {
                count++;
            }
        }
        return count;
    }

    // spits out a random image & its promotional URL
    public Hashtable chooseImage()
    {
        // code to spit out random image in directory
        /*
        string pageRoot = "/";
        string path = Server.MapPath(pageRoot + "random_images/");
        string[] files = Directory.GetFiles(path);
        Random r = new Random();
        FileInfo fi = new FileInfo(files[r.Next(0, files.Length)]);
        return pageRoot + "random_images/" + fi.Name;
        */

        // read random line from file
        //string promosDbFilePath = Server.MapPath("/radio_depaul/trunk/random_images/promos.txt");
        string promosDbFilePath = Server.MapPath("/random_images/promos.txt");
        int promosDbNumLines = CountLinesInFile(promosDbFilePath);
        Random r = new Random();
        int promosDbFileLine = r.Next(0, promosDbNumLines);
        string line = "";
        System.IO.StreamReader promosStream = new System.IO.StreamReader(promosDbFilePath);
        for (int i = 0; i <= promosDbFileLine; i++)
        {
            line = promosStream.ReadLine();
        }

        //Console.WriteLine(promosDbNumLines);

        //Debug.WriteLine(line);

        // get image path and promo url from file
        string[] imgAndPromoUrlArr = line.Split('\t');
        Hashtable imgAndPromoUrlHash = new Hashtable();
        imgAndPromoUrlHash.Add("imagePath", imgAndPromoUrlArr[0]);
        imgAndPromoUrlHash.Add("promoUrl", imgAndPromoUrlArr[1]);
        Uri uri = new Uri(imgAndPromoUrlArr[1]);
        String domain = uri.Host;
        imgAndPromoUrlHash.Add("domain", domain);
        imgAndPromoUrlHash.Add("title", imgAndPromoUrlArr[2]);

        return imgAndPromoUrlHash;
    }



}